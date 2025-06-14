import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PurviewService {
  @Inject(CACHE_MANAGER) private cacheManage: Cache;
  constructor(private readonly prisma: PrismaService) {}

  // -------------------------获取用户权限------------------------------

  async getPurview(RoleID: number) {
    // 先从cache里获取
    const cacheKey = `purview_${RoleID}`;
    const cachedPurview = await this.cacheManage.get<string[]>(cacheKey);
    if (cachedPurview) {
      return cachedPurview;
    }

    // admin_role_purview只有两个字段RoleID和Purview，此处需要转成[Purview, ...]返回
    const records = await this.prisma.backstage.admin_role_purview.findMany({ where: { RoleID } });
    const PurviewList = records.map(record => record.Purview);

    // 并缓存起来
    await this.cacheManage.set<string[]>(cacheKey, PurviewList, 3600000); // 设置缓存过期时间为1小时

    return PurviewList;
  }
}
