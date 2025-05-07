import { serverSupabaseUser } from "#supabase/server";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const supabaseUser = await serverSupabaseUser(event);

  if (!supabaseUser) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  const user = await prisma.tbm_user.findFirst({
    where: { email: supabaseUser.email },
    include: {
      teams: true,
    },
  });
  if (!user) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  console.log("supabaseUser", supabaseUser.email);

  event.context.auth = {
    id: user.id,
    team_id: user.teams[0]?.team_id,
    email: String(supabaseUser.email),
  };
});
