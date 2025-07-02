import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { getSupabaseConfig } from '../config/supabase.config';
import { AuthUser, SignUpData, SignInData, AuthResponse } from '../types/auth.types';

export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    const config = getSupabaseConfig();
    this.client = createClient(config.url, config.anonKey);
  }

  async signUp(data: SignUpData): Promise<AuthResponse> {
    try {
      const { data: authData, error } = await this.client.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.full_name,
            username: data.username,
          },
        },
      });

      if (error) {
        return { user: null, error: error.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Failed to create user' };
      }

      const user = this.mapSupabaseUserToAuthUser(authData.user);
      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'An unexpected error occurred' };
    }
  }

  async signIn(data: SignInData): Promise<AuthResponse> {
    try {
      const { data: authData, error } = await this.client.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        return { user: null, error: error.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Failed to sign in' };
      }

      const user = this.mapSupabaseUserToAuthUser(authData.user);
      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'An unexpected error occurred' };
    }
  }

  async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await this.client.auth.signOut();
      return { error: error?.message || null };
    } catch (error) {
      return { error: 'An unexpected error occurred' };
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const { data: { user }, error } = await this.client.auth.getUser();
      
      if (error || !user) {
        return null;
      }

      return this.mapSupabaseUserToAuthUser(user);
    } catch (error) {
      return null;
    }
  }

  async verifyToken(token: string): Promise<AuthUser | null> {
    try {
      const { data: { user }, error } = await this.client.auth.getUser(token);
      
      if (error || !user) {
        return null;
      }

      return this.mapSupabaseUserToAuthUser(user);
    } catch (error) {
      return null;
    }
  }

  getClient(): SupabaseClient {
    return this.client;
  }

  private mapSupabaseUserToAuthUser(user: User): AuthUser {
    return {
      id: user.id,
      email: user.email || '',
      email_verified: user.email_confirmed_at ? true : false,
      username: user.user_metadata?.username,
      full_name: user.user_metadata?.full_name,
      avatar: user.user_metadata?.avatar_url,
      supabase_user_id: user.id,
    };
  }
}