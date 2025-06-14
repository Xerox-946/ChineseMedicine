import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { PoliciesGuard } from '../casl/casl.guard'; // 导入AbilitiesGuard
import { CheckPolicies } from '../casl/check-policies.decorator'; // 导入CheckAbilities装饰器
import { AppAbility } from '../casl/casl-ability.factory';
import { MicroService } from '../service/micro.service';

// 测试用例，测试能否正常使用装饰器
@Controller('micro')
export class MicroController {

  constructor(private readonly microService: MicroService) { }

  @Post()
  @UseGuards(PoliciesGuard) // 使用AbilitiesGuard守卫
  @CheckPolicies((ability: AppAbility) => ability.can('read', 'Micro'))
  async callMicroService(@Req() req: any) {
    return await this.microService.callMicroService(req);
  }

}
