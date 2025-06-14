import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import configuration from './config/index';
import { JwtModule } from '@nestjs/jwt';
import { AllExceptionFilter } from './common/filters/all-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { CentreModule } from './centre/centre.module';
import { CacheModule } from '@nestjs/cache-manager';
import { BigIntInterceptor } from './bigint.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [configuration],
      isGlobal: true,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    JwtModule.register({
      global: true, // 设置为全局模块，以便在应用程序的任何地方使用 JWT 服务。
      secret: 'l128dhuqwdqjd018e17hiai', // 生产环境应使用环境变量
      signOptions: { expiresIn: '1h' },
    }),
    CentreModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    }
  ],
})
export class AppModule { }
