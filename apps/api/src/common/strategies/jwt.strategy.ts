import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '@repo/auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private userService: UserService;

  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'your-secret-key',
    });
    this.userService = new UserService();
  }

  async validate(payload: any) {
    const user = await this.userService.getUserById(payload.sub);
    
    if (!user || user.is_deleted) {
      throw new UnauthorizedException();
    }

    return user;
  }
}