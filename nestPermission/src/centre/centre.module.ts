import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CentreService } from './service/centre.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CaslAbilityFactory } from './casl/casl-ability.factory';
import * as ServerList from './service/index';
import * as ControllerList from './controller/index';

// 生成 allService 数组
const allServices = Object.keys(ServerList).map(key => ServerList[key]);

// 生成 allControllers 数组
const allControllers = Object.keys(ControllerList).map(key => ControllerList[key]);

@Module({
  imports: [PrismaModule],
  providers: [CentreService, CaslAbilityFactory, JwtStrategy, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }, ...allServices],
  controllers: [...allControllers]
})
export class CentreModule { }
