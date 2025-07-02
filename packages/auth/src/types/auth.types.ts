export interface AuthUser {
  id: string;
  email: string;
  email_verified?: boolean;
  username?: string;
  full_name?: string;
  avatar?: string;
  supabase_user_id?: string;
}

export interface SignUpData {
  email: string;
  password: string;
  full_name?: string;
  username?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: AuthUser | null;
  error: string | null;
}

export interface JwtPayload {
  sub: string;
  email: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  role: string;
}