export interface SupabaseConfig {
  url: string;
  anonKey: string;
  serviceRoleKey?: string;
}

export const getSupabaseConfig = (): SupabaseConfig => {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anonKey) {
    throw new Error('Missing required Supabase environment variables');
  }

  return {
    url,
    anonKey,
    serviceRoleKey,
  };
};