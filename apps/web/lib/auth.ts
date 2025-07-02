import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AuthUser {
  id: string;
  email: string;
  username?: string;
  full_name?: string;
  avatar?: string;
  email_verified: boolean;
}

export interface AuthResponse {
  user: AuthUser | null;
  access_token?: string;
  error?: string;
}

class AuthService {
  private apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  async signUp(email: string, password: string, full_name?: string, username?: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, full_name, username }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { user: null, error: data.message || 'Sign up failed' };
      }

      // Store token in localStorage
      if (data.access_token) {
        localStorage.setItem('auth_token', data.access_token);
      }

      return { user: data.user, access_token: data.access_token };
    } catch (error) {
      return { user: null, error: 'Network error occurred' };
    }
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { user: null, error: data.message || 'Sign in failed' };
      }

      // Store token in localStorage
      if (data.access_token) {
        localStorage.setItem('auth_token', data.access_token);
      }

      return { user: data.user, access_token: data.access_token };
    } catch (error) {
      return { user: null, error: 'Network error occurred' };
    }
  }

  async signOut(): Promise<{ error?: string }> {
    try {
      const token = localStorage.getItem('auth_token');
      
      if (token) {
        await fetch(`${this.apiUrl}/auth/signout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }

      localStorage.removeItem('auth_token');
      return {};
    } catch (error) {
      localStorage.removeItem('auth_token');
      return { error: 'Sign out failed' };
    }
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const token = localStorage.getItem('auth_token');
      
      if (!token) {
        return null;
      }

      const response = await fetch(`${this.apiUrl}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        localStorage.removeItem('auth_token');
        return null;
      }

      const user = await response.json();
      return user;
    } catch (error) {
      localStorage.removeItem('auth_token');
      return null;
    }
  }

  async verifyToken(): Promise<boolean> {
    try {
      const token = localStorage.getItem('auth_token');
      
      if (!token) {
        return false;
      }

      const response = await fetch(`${this.apiUrl}/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        localStorage.removeItem('auth_token');
        return false;
      }

      return true;
    } catch (error) {
      localStorage.removeItem('auth_token');
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}

export const authService = new AuthService();