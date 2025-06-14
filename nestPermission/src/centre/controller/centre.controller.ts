import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from '../casl/casl.guard'; // 导入AbilitiesGuard
import { CheckPolicies } from '../casl/check-policies.decorator'; // 导入CheckAbilities装饰器
import { AppAbility } from '../casl/casl-ability.factory';
import { CentreService } from '../service/centre.service';

// 测试用例，测试能否正常使用装饰器
@Controller('centre')
export class CentreController {

  constructor(private readonly centre: CentreService) { }

  @Get('all')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'User'))
  async findAll() {
    // 返回所有示例数据
    return await this.centre.getAll();
  }

  @Get('delete')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'QueryPlayer'))
  async QueryPlayer() {
    // 返回所有示例数据
    return await this.centre.getAll();
  }

  /**********************************静态表管理接口********************************/
  @Get('getStaticList')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async getStaticList(
    @Req() req: Request
  ) {
    return await this.centre.getStaticList(req);
  }

  @Post('addStatic')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async addStatic(@Req() req: Request) {
    return await this.centre.addStatic(req);
  }

  // @Post('updateStatic')
  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  // async updateStatic(@Req() req: Request) {
  //   return await this.centre.updateStatic(req);
  // }

  @Post('delStatic')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async delStatic(@Req() req: Request) {
    return await this.centre.delStatic(req);
  }

  /**********************************角色管理接口********************************/
  @Get('getPlayerList')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'PlayerOperation'))
  async getPlayerList(
    @Req() req: Request, // 注入请求对象
  ) {
    return await this.centre.getPlayerList(req);
  }

  @Post('addPlayer')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'PlayerOperation'))
  async addPlayer(@Req() req: Request) {
    return await this.centre.addPlayer(req);
  }

  @Post('updatePlayer')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'PlayerOperation'))
  async updatePlayer(@Req() req: Request) {
    return await this.centre.updatePlayer(req);
  }

  @Post('delPlayer')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'PlayerOperation'))
  async delPlayer(@Req() req: Request) {
    return await this.centre.delPlayer(req);
  }

  /**********************************角色管理接口********************************/
  @Get('getAdminList')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'AdminOperation'))
  async getAdminList(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.getAdminList(req);
  }

  @Post('addAdmin')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'AdminOperation'))
  async addAdmin(@Req() req: Request) {
    return await this.centre.addAdmin(req);
  }

  @Post('updateAdmin')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'AdminOperation'))
  async updateAdmin(@Req() req: Request) {
    return await this.centre.updateAdmin(req);
  }

  @Post('delAdmin')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'AdminOperation'))
  async delAdmin(@Req() req: Request) {
    return await this.centre.delAdmin(req);
  }

  /**********************************获取静态表数据接口********************************/
  // @Get('getStaticInfo')
  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  // async getStaticInfo(
  //   @Req() req: Request, // 注入请求对象 
  // ) {
  //   return await this.centre.getStaticInfo(req);
  // }

  @Get('getActionInfoList')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async getActionInfoList(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.getActionInfoList(req);
  }

  @Post('changeAction')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async changeAction(
    @Req() req: Request, // 注入请求对象
  ) {
    return await this.centre.changeAction(req);
  }

  @Post('addAction')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async addAction(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.addAction(req);
  }

  @Get('getTableComment')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async getTableComment(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.getTableComment(req);
  }

  @Post('addTableInfo')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async addTableInfo(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.addTableInfo(req);
  }

  @Post('updateTableInfo')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async updateTableInfo(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.updateTableInfo(req);
  }

  @Post('delTableInfo')
  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'StaticOperation'))
  async delTableInfo(
    @Req() req: Request, // 注入请求对象 
  ) {
    return await this.centre.delTableInfo(req);
  }

}
