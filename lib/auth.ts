import { createClient } from "./supabase-server";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  const supabase = await createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Get or create user in our database
  let dbUser = await prisma.tbm_user.findUnique({
    where: { email: user.email! },
  });

  if (!dbUser) {
    dbUser = await prisma.tbm_user.create({
      data: {
        email: user.email!,
        full_name: user.user_metadata?.full_name || null,
        avatar: user.user_metadata?.avatar_url || null,
        email_verified: user.email_confirmed_at ? true : false,
      },
    });
  }

  return dbUser;
}

export async function getUserTeams(userId: string) {
  return await prisma.tbs_team_member.findMany({
    where: {
      user_id: userId,
      status: "Active",
      is_deleted: false,
    },
    include: {
      team: true,
    },
  });
}

export async function createTeam(
  name: string,
  slug: string,
  creatorId: string
) {
  const team = await prisma.tbm_team.create({
    data: {
      name,
      slug,
      creator_id: creatorId,
    },
  });

  // Add creator as owner
  await prisma.tbs_team_member.create({
    data: {
      team_id: team.id,
      user_id: creatorId,
      role: "Owner",
    },
  });

  return team;
}