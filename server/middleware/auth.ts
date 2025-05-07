import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabaseUser = await serverSupabaseUser(event);

  if (!supabaseUser) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  console.log("supabaseUser", supabaseUser.email);

  event.context.auth = {
    email: String(supabaseUser.email),
  };
});
