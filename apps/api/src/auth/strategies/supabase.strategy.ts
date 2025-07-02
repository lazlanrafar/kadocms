import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { SupabaseService } from '@repo/auth';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy, 'supabase') {
  private supabaseService: SupabaseService;

  constructor() {
    super();
    this.supabaseService = new SupabaseService();
  }

  async validate(req: any): Promise<any> {
    const token = this.extractTokenFromHeader(req);
    
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    const user = await this.supabaseService.verifyToken(token);
    
    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    return user;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}