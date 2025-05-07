import { serverSupabaseUser } from "#supabase/server";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const supabaseUser = await serverSupabaseUser(event);

    if (!supabaseUser) {
      throw createError({ statusCode: 401, message: "Unauthorized" });
    }

    const existingUser = await prisma.tbm_user.findFirst({
      where: { email: supabaseUser.email },
    });

    const userMetadata = supabaseUser.user_metadata ?? {};

    const userData = {
      avatar: userMetadata.avatar_url || userMetadata.picture || null,
      email: String(supabaseUser.email),
      email_verified: userMetadata.email_verified ?? false,
      user_name: userMetadata.user_name ?? null,
      full_name: userMetadata.full_name ?? null,
      name: userMetadata.full_name ?? null,
    };

    const user = existingUser
      ? await prisma.tbm_user.update({
          where: { email: supabaseUser.email },
          data: userData,
        })
      : await prisma.tbm_user.create({ data: userData });

    return user;
  } catch (error) {
    console.error("Error in upsert user:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
