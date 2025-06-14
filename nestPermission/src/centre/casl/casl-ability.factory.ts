import { Injectable, Inject } from '@nestjs/common';
import { PureAbility, AbilityBuilder, createMongoAbility } from '@casl/ability';
import { Action, Subjects } from './casl-types';
import { PurviewService } from '../service/purview.service';
// import { User } from '@prisma/client';

export type AppAbility = PureAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {

  constructor(
    @Inject(PurviewService) private purviewService: PurviewService,
  ) {}

  async createForUser(admin: any) {
    const { can, build } = new AbilityBuilder(createMongoAbility);
    // 从 PurviewService 获取权限列表
    const purviews = await this.purviewService.getPurview(admin.RoleID);
    // 根据权限列表配置 CASL 规则
    if (admin.UserName === 'admin') {
      can('manage', 'all'); // 管理员拥有所有权限
      return build();
    }

    purviews.forEach(purview => {
      // 这里需要根据 purview 的具体结构来配置规则
      // 假设 purview 是一个对象，包含 action 和 subject 属性
      can('read', purview);
    });

    return build();
  }
}