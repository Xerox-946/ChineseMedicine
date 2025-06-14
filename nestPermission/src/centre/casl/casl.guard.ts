import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from './casl-ability.factory';
import { CHECK_POLICIES_KEY } from './check-policies.decorator';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // 假设请求对象上有一个user属性，包含JWT验证后的用户信息
    const policyHandlers = this.reflector.get(
      CHECK_POLICIES_KEY,
      context.getHandler(),
    ) || [];

    const ability = await this.caslAbilityFactory.createForUser(user);

    return policyHandlers.every(handler =>
      handler(ability),
    );
  }
}