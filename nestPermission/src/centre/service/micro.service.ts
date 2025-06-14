import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto-js';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios'; // 导入axios库用于发送HTTP请求

@Injectable()
export class MicroService {
  constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) { }

  // --------------------调用微服务-------------------------
  async callMicroService(req: Request): Promise<any> {
    const { Cmd, Host, QueryType, ...params } = req['query'];
    const apiInfo = this.configService.get(`api.${Host}`);
    var response: AxiosResponse<any, any>;
    if (Host == 'DBLinkHost') {
      const url = `${apiInfo}`;
      const {Params} = params;
      if (Params) {
        params.Params = JSON.parse(Params); 
      }
      response = await axios.post(url, { Cmd, ...params });
      return response.data; // 返回响应数据
    }
    if (QueryType === 'Get') {
      // 构造GET请求的URL
      const url = `${apiInfo}/${Cmd}?${new URLSearchParams(params).toString()}`;
      response = await axios.get(url);
    } else if (QueryType === 'Post') {
      // 构造POST请求
      const url = `${apiInfo}/${Cmd}`;
      response = await axios.post(url, params);
    } else {
      throw new Error('Unsupported QueryType');
    }
    return response.data; // 返回响应数据
  }

  // --------------------通用方法-------------------------
  transform(str: string) {
    // 由'1,2,3,4' 转成[1,2,3,4] number列表
    // 使用 split 方法按逗号分割字符串
    const stringArray = str.split(',');

    // 使用 map 方法遍历数组并将每个字符串转换为数字
    const numberArray = stringArray.map(item => parseInt(item, 10));
    return numberArray;
  }

  async transformList(array: any[]) {
    // 由[1,2,3,4] 转成'1,2,3,4'number列表
    return array.join(',');
  }

  getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
  };

  getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date);
    firstDay.setDate(1); // 将日期设置为当月的第一天
    firstDay.setHours(8, 0, 0, 0); // 将时间设置为当天的开始（午夜12点）
    return firstDay;
  }

  // 格式化日期为 'YYYY-MM-DD'
  formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  async md532(password: string, salt: string) {
    const md5Password = crypto.MD5(crypto.MD5(salt + password).toString().split('').reverse().join('') + salt).toString();
    return md5Password;
  }

  // 语言包联表查询
  // async getLan(tableName: string, module: string, prop: string, ids: number[]): Promise<any[]> {
  //   const query = `
  //   SELECT 
  //     l.Word, 
  //     s.ModuleID 
  //   FROM 
  //     ${tableName} l
  //   LEFT JOIN 
  //     sys_lan_sql s
  //   ON 
  //     l.Type = s.Type AND l.TypeID = s.SqlLanID
  //   WHERE 
  //     s.Type = 'Sql' AND 
  //     s.Module = '${module}' AND 
  //     s.Prop = '${prop}' AND 
  //     s.ModuleID IN (${await this.transformList(ids)})
  //   `;
  //   return await this.prisma.sysInfo.$queryRawUnsafe(query);
  // }

  // async getClientLan(tableName: string, type: string, module: string): Promise<any[]> {
  //   const query = `SELECT l.Word, c.Key, c.Word CN FROM ${tableName} l LEFT JOIN sys_lan_client c ON l.Type = c.Type AND l.TypeID = c.ClientLanID 
  //     WHERE c.Type = '${type}' AND c.Module = '${module}'`
  //   return await this.prisma.sysInfo.$queryRawUnsafe(query);
  // }
}
