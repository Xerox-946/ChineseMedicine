import { Controller, Post, UseGuards, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './auth.guard'; 

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req: Request) {
    return this.authService.login(req);
  }
}
