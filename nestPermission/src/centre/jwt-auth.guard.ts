import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  private readonly WHITE_LIST = ['/auth/login', '/key/handleUseKey'];

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    // 白名单直接放行
    if (this.WHITE_LIST.includes(request.path)) {
      return true;
    }
    // console.log('Raw Token:', request.headers.authorization?.split(' ')[1]);
    // 在这里可以添加额外的逻辑，如日志记录、权限检查等
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // 如果验证失败，可以自定义错误处理逻辑
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}