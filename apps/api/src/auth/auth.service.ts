import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SupabaseService, UserService } from '@repo/auth';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  private supabaseService: SupabaseService;
  private userService: UserService;

  constructor(private jwtService: JwtService) {
    this.supabaseService = new SupabaseService();
    this.userService = new UserService();
  }

  async signUp(signUpDto: SignUpDto) {
    const { user, error } = await this.supabaseService.signUp(signUpDto);

    if (error) {
      throw new ConflictException(error);
    }

    if (!user) {
      throw new ConflictException('Failed to create user');
    }

    // Store user in Prisma database
    const dbUser = await this.userService.createOrUpdateUser(user);

    // Generate JWT token
    const payload = { sub: dbUser.id, email: dbUser.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      user: {
        id: dbUser.id,
        email: dbUser.email,
        username: dbUser.username,
        full_name: dbUser.full_name,
        avatar: dbUser.avatar,
        email_verified: dbUser.email_verified,
      },
      access_token: accessToken,
    };
  }

  async signIn(signInDto: SignInDto) {
    const { user, error } = await this.supabaseService.signIn(signInDto);

    if (error) {
      throw new UnauthorizedException(error);
    }

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Update user in Prisma database
    const dbUser = await this.userService.createOrUpdateUser(user);

    // Generate JWT token
    const payload = { sub: dbUser.id, email: dbUser.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      user: {
        id: dbUser.id,
        email: dbUser.email,
        username: dbUser.username,
        full_name: dbUser.full_name,
        avatar: dbUser.avatar,
        email_verified: dbUser.email_verified,
      },
      access_token: accessToken,
    };
  }

  async signOut() {
    const { error } = await this.supabaseService.signOut();
    
    if (error) {
      throw new UnauthorizedException(error);
    }

    return { message: 'Successfully signed out' };
  }

  async getProfile(userId: string) {
    const user = await this.userService.getUserById(userId);
    
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      full_name: user.full_name,
      avatar: user.avatar,
      email_verified: user.email_verified,
      created_at: user.created_at,
    };
  }

  async validateUser(payload: any) {
    const user = await this.userService.getUserById(payload.sub);
    
    if (!user || user.is_deleted) {
      return null;
    }

    return user;
  }
}