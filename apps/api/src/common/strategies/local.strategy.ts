import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { SupabaseService } from '@repo/auth';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private supabaseService: SupabaseService;

  constructor() {
    super({
      usernameField: 'email',
    });
    this.supabaseService = new SupabaseService();
  }

  async validate(email: string, password: string): Promise<any> {
    const { user, error } = await this.supabaseService.signIn({ email, password });
    
    if (error || !user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}