import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './auth.guard';

@Module({
  imports: [PrismaModule],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  controllers: [AuthController]
})
export class AuthModule {}
