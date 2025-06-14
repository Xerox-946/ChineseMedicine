import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto-js';
import { ConfigService } from '@nestjs/config';
const moment = require("moment");

@Injectable()
export class CentreService {
  constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) { }

  // ----------------------用户----------------------------
  async getAuth(id: number) {
    return await this.prisma.backstage.admin.findUnique({ where: { ID: id } });
  }

  async getAll() {
    return await this.prisma.backstage.admin.findMany();
  }

  // --------------------数据库查询-------------------------
  // 获取静态表列表
  async getStaticList(req: Request) {
    const { Page = 1, Limit = 10 } = req['query'];
    const skip = (Number(Page) - 1) * Number(Limit); // 每页显示limit条记录
    const list = await this.prisma.backstage.centre_static_data.findMany({
      where: { enabled: true },
      skip,
      take: Number(Limit || 10),
    });
    const total = await this.prisma.backstage.centre_static_data.count({ where: { enabled: true } });
    return { data: list, total };
  }

  // 添加静态表数据
  async addStatic(req: Request) {
    const { isEdit = 0, tableInfo, ...requestInfo } = req['query'];
    requestInfo['isEdit'] = Number(isEdit) > 0 ? true : false;
    requestInfo['updatetime'] = moment().unix();
    requestInfo['enabled'] = true;
    const staticInfo = await this.prisma.backstage.centre_static_data.upsert({
      where: { name: requestInfo['name'] },
      update: requestInfo,
      create: requestInfo,
    });
    await this.prisma.createTableIfNotExists("backstage", requestInfo.name, requestInfo.desc, tableInfo);
    return staticInfo;
  }

  // 删除静态表数据
  async delStatic(req: Request) {
    const { id } = req['query'];
    const staticInfo = await this.prisma.backstage.centre_static_data.delete({
      where: { id: Number(id) },
    });
    await this.prisma.dropTableIfExists("backstage", staticInfo.name);
    return staticInfo;
  }

  // 获取角色管理列表
  async getPlayerList(req: Request) {
    const { Page = 1, Limit = 10 } = req['query'];
    const skip = (Number(Page) - 1) * Number(Limit); // 每页显示limit条记录
    const list = await this.prisma.backstage.admin_role.findMany({
      skip,
      take: Number(Limit || 10),
      orderBy: { ID: 'desc' }
    });
    const total = await this.prisma.backstage.admin_role.count();
    return { data: list, total };
  }

  // 创建角色管理
  async addPlayer(req: Request) {
    const { ActionList, RoleSource, ...requestInfo } = req['query'];
    requestInfo['AddTime'] = moment().unix();
    requestInfo['RoleSource'] = Number(RoleSource) > 0 ? 1 : 0;
    const player = await this.prisma.backstage.admin_role.create({ data: requestInfo });
    if (ActionList) {
      const actionList = ActionList.split(',');
      await this.prisma.backstage.admin_role_action.createMany({ data: actionList.map((item: any) => ({ role_id: player.ID, action_id: Number(item) })) });
    }
    return player;
  }

  // 更新角色管理
  async updatePlayer(req: Request) {
    const { ID, ActionList, RoleSource, ...requestInfo } = req['query'];
    requestInfo['RoleSource'] = Number(RoleSource) > 0 ? 1 : 0;
    const player = await this.prisma.backstage.admin_role.update({
      where: { ID: Number(ID) },
      data: requestInfo,
    });
    if (ActionList) {
      const actionList = ActionList.split(',');
      await this.prisma.backstage.admin_role_action.deleteMany({ where: { role_id: Number(ID) } })
      await this.prisma.backstage.admin_role_action.createMany({ data: actionList.map((item: any) => ({ role_id: Number(ID), action_id: Number(item) })) });
    }
    return player;
  }

  // 删除角色管理
  async delPlayer(req: Request) {
    const { ID } = req['query'];
    await this.prisma.backstage.admin_role_action.deleteMany({ where: { role_id: { in: await this.transNumberListformList(ID) } } })
    const player = await this.prisma.backstage.admin_role.deleteMany({
      where: { ID: { in: await this.transNumberListformList(ID) } },
    });
    return player;
  }

  // 获取用户列表
  async getAdminList(req: Request) {
    const { Page = 1, Limit = 10 } = req['query'];
    const skip = (Number(Page) - 1) * Number(Limit); // 每页显示limit条记录
    const list = await this.prisma.backstage.admin.findMany({
      skip,
      take: Number(Limit || 10),
    });
    const total = await this.prisma.backstage.admin.count();
    return { data: list, total };
  }

  // 创建用户
  async addAdmin(req: Request) {
    const { RoleID, Sex = 0, Status = 0, Password, PowerID = 1, ...requestInfo } = req['query'];
    requestInfo['RoleID'] = Number(RoleID);
    requestInfo['Sex'] = Number(Sex) > 0 ? true : false;
    requestInfo['Salt'] = "CwrFTvWR";
    requestInfo['Password'] = await this.md532(requestInfo.Password, requestInfo['Salt']);
    requestInfo['Status'] = Number(Status) > 0 ? true : false;
    requestInfo['PowerID'] = Number(PowerID) > 0 ? true : false;
    requestInfo['Dateline'] = moment().unix();
    const admin = await this.prisma.backstage.admin.create({ data: requestInfo });
    return admin;
  }

  // 更新用户
  async updateAdmin(req: Request) {
    const { ID, RoleID, Sex = 0, Status = 0, Password, ...requestInfo } = req['query'];
    requestInfo['Sex'] = Boolean(Sex);
    requestInfo['RoleID'] = Number(RoleID);
    requestInfo['Status'] = Number(Status) > 0 ? true : false;
    if (Password != '') {
      requestInfo['Password'] = await this.md532(requestInfo.Password, "CwrFTvWR");
    }
    const admin = await this.prisma.backstage.admin.update({
      where: { ID: Number(ID) },
      data: requestInfo,
    });
    return admin;
  }

  // 删除用户
  async delAdmin(req: Request) {
    const { id } = req['query'];
    const admin = await this.prisma.backstage.admin.deleteMany({
      where: { ID: { in: await this.transNumberListformList(id) } },
    });
    return admin;
  }

  async getActionInfoList(req: Request) {
    const { roleID = '0' } = req['query'];
    const resultData = {};
    const expandedKeys = [];
    const checkedKeys = [];
    const actionList = await this.prisma.backstage.admin_actions.findMany({});
    if (roleID != '0') {
      const roleActionList = await this.prisma.backstage.admin_role_action.findMany({ where: { role_id: Number(roleID) } });
      for (const item of roleActionList) {
        if (actionList.find(i => i.id === item.action_id).parent_id == 0) {
          expandedKeys.push(item.action_id);
        } else {
          checkedKeys.push(item.action_id);
          if (!expandedKeys.includes(actionList.find(i => i.id === item.action_id).parent_id)) expandedKeys.push(actionList.find(i => i.id === item.action_id).parent_id);
        }
      }
    }
    resultData['expandedKeys'] = expandedKeys;
    resultData['checkedKeys'] = checkedKeys;
    // 获取所有父节点（parentId=0）
    const parents = actionList.filter(item => item.parent_id === 0);
    // 为每个父节点挂载子节点
    const treeData = parents.map(parent => ({
      ...parent,
      children: actionList
        .filter(child => child.parent_id === parent.id)
        .map(({ parent_id, ...rest }) => rest) // 移除 parentId 字段（可选）
    }));
    return { data: treeData, expectData: resultData };
  }

  async changeAction(req: Request) {
    const { ID = '0' } = req['query'];
    const actionInfo = await this.prisma.backstage.admin_actions.findUnique({ where: { id: Number(ID) } });
    if (!actionInfo) return '找不到该数据！';
    await this.prisma.backstage.admin_actions.update({
      where: { id: Number(ID) },
      data: { status: actionInfo.status + 1 % 2 }
    },);
    return 'ok';
  }

  async addAction(req: Request) {
    const { action_name, parent_id, status, ...dataInfo } = req['query'];
    const actionInfo = await this.prisma.backstage.admin_actions.findFirst({ where: { action_name } });
    if (actionInfo) return '名称重复！';
    dataInfo['action_name'] = action_name;
    dataInfo['parent_id'] = Number(parent_id);
    if (Number(parent_id) == 0) {
      dataInfo['desc'] = "C";
    } else {
      dataInfo['desc'] = "A";
    }
    dataInfo['status'] = Boolean(status);
    await this.prisma.backstage.admin_actions.create({
      data: dataInfo,
    },);
    return 'ok';
  }

  async getTableComment(req: Request) {
    const { TableName, TableSchema } = req['query'];
    const data = await this.prisma.backstage.$queryRawUnsafe(
      `SELECT 
          COLUMN_NAME AS codes,
          COLUMN_COMMENT AS comments,
          DATA_TYPE AS dataType
      FROM 
          INFORMATION_SCHEMA.COLUMNS
      WHERE 
          TABLE_SCHEMA = '${TableSchema}' 
          AND TABLE_NAME = '${TableName}';`);
    return data;
  }

  async addTableInfo(req: Request) {
    const { TableName, ...tableInfo } = req['query'];
    var sqlInfo = `INSERT INTO ${TableName} SET `;
    for (const key in tableInfo) {
      sqlInfo += `${key} = '${tableInfo[key]}',`;
    }
    sqlInfo = sqlInfo.slice(0, -1) + ";";
    const tableData = await this.prisma.backstage.centre_static_data.findFirst({ where: { name: TableName } });
    if (tableData) {
      await this.prisma.backstage.centre_static_data.update({
        where: { name: TableName },
        data: { updatetime: moment().unix() }
      });
    }
    await this.prisma.backstage.$executeRawUnsafe(sqlInfo);
    return 'ok';
  }

  async updateTableInfo(req: Request) {
    const { TableName, ID, ...tableInfo } = req['query'];
    var sqlInfo = `UPDATE ${TableName} SET `;
    for (const key in tableInfo) {
      sqlInfo += `${key} = '${tableInfo[key]}',`;
    }
    sqlInfo = sqlInfo.slice(0, -1) + ` WHERE ID = ${ID};`;
    const tableData = await this.prisma.backstage.centre_static_data.findFirst({ where: { name: TableName } });
    await this.prisma.backstage.$executeRawUnsafe(sqlInfo);
    if (tableData) {
      await this.prisma.backstage.centre_static_data.update({
        where: { name: TableName },
        data: { updatetime: moment().unix() }
      });
    }
    return 'ok';
  }

  async delTableInfo(req: Request) {
    const { TableName, ID } = req['query'];
    var sqlInfo = `DELETE FROM ${TableName} WHERE ID = ${ID};`;
    await this.prisma.backstage.$executeRawUnsafe(sqlInfo);
    const tableData = await this.prisma.backstage.centre_static_data.findFirst({ where: { name: TableName } });
    if (tableData) {
      await this.prisma.backstage.centre_static_data.update({
        where: { name: TableName },
        data: { updatetime: moment().unix() }
      });
    }
    return 'ok';
  }

  async getTableList() {
    const data = await this.prisma.backstage.$queryRawUnsafe(`SELECT TABLE_NAME AS tableName FROM information_schema.tables WHERE table_schema='cn_med' AND table_type='BASE TABLE'`);
    return data;
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

  transformString(str: string) {
    // 由'1,2,3,4' 转成[1,2,3,4] number列表
    // 使用 split 方法按逗号分割字符串
    return str.split(',');
  }

  async transformList(array: any[]) {
    // 由[1,2,3,4] 转成'1,2,3,4'number列表
    return array.join(',');
  }

  async transNumberListformList(array: string[]): Promise<number[]> {
    const result = array.map(item => Number(item));
    return result;
  }

  getToday = () => {
    return moment().startOf('day').format('YYYY-MM-DD');
  }

  getYesterday = () => {
    return moment().startOf('day').subtract(1).format('YYYY-MM-DD');
  };

  getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date);
    firstDay.setDate(1); // 将日期设置为当月的第一天
    return this.formatDate(firstDay);
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
}
