import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CentreService } from './service/centre.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private centreService: CentreService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // 是否忽略 token 过期时间，通常设置为 false
      secretOrKey: 'l128dhuqwdqjd018e17hiai', // 替换为您的 JWT 密钥
    });
  }
  async validate(payload: any) {
    // 在这里实现您的验证逻辑
    // 通常，您会根据 payload 中的信息来查询数据库中的用户
    // 如果用户存在且有效，返回用户对象；否则，抛出 UnauthorizedException
    const user = await this.centreService.getAuth(payload.auth_id);
    return user;
  }
}