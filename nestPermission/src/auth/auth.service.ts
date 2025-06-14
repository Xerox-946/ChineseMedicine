import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto-js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.prisma.backstage.admin.findUnique({ where: { UserName: username } });
    // 使用 crypto-js 将密码加密为 MD5 格式
    const md5Password = await this.md532(password, user.Salt);
    if (user && user.Password === md5Password) { // 实际生产环境应使用加密验证
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(req: any) {
    const user = req.user;
    const payload = { auth_name: user.UserName, auth_id: user.ID };
    const access_token = this.jwtService.sign(payload);
    const permission = await this.getActions(user.RoleID);
    return {
      username: user.UserName,
      access_token,
      ...permission
    };
  }

  async getActions(RoleID: number) {
    // admin_role_action只有两个字段RoleID和Purview，此处需要转成[Purview, ...]返回
    const records = await this.prisma.backstage.admin_role_action.findMany({ where: { role_id: RoleID } });
    const ActionIDList = records.map(record => record.action_id);

    const CatalogList = await this.prisma.backstage.admin_actions.findMany({ select: { id: true, parent_id: true, action: true, action_name: true }, where: { id: { in: ActionIDList }, parent_id: 0 }, orderBy: { orderby: 'asc' } });
    const ChildrenList = await this.prisma.backstage.admin_actions.findMany({ select: { id: true, parent_id: true, action: true, action_name: true }, where: { id: { in: ActionIDList }, orderby: { gt: 0 }, parent_id: { gt: 0 } }, orderBy: { orderby: 'asc' } });
    const ActionList = await this.prisma.backstage.admin_actions.findMany({ select: { action: true }, where: { id: { in: ActionIDList }, orderby: 0 } });
    const menuList = await this.createCatalog(CatalogList, ChildrenList);
    // const catalogs = CatalogList.map(c => c.action);
    const actions = ActionList.map(c => c.action);
    return { menuList, actions };
  }

  async createCatalog(CatalogList: { id: number; parent_id: number; action: string; action_name: string }[], ChildrenList: { id: number; parent_id: number; action: string; action_name: string }[]) {
    const menuList = [];
    for (const catalog of CatalogList) {
      const catalogWithoutIdAndParentId = { action: catalog.action, action_name: catalog.action_name };
      const childrenWithoutIdAndParentId = ChildrenList
        .filter(c => c.parent_id === catalog.id)
        .map(c => ({ action: c.action, action_name: c.action_name }));
      menuList.push({ ...catalogWithoutIdAndParentId, children: childrenWithoutIdAndParentId });
    }
    return menuList;
  }

  async md532(password: string, salt: string) {
    const md5Password = crypto.MD5(crypto.MD5(salt + password).toString().split('').reverse().join('') + salt).toString();
    return md5Password;
  }
}
