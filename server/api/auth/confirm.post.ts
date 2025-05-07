import { serverSupabaseUser } from "#supabase/server";
import prisma from "~/lib/prisma";
import { SlugGenerator } from "~/utils";

export default defineEventHandler(async (event) => {
  try {
    const supabaseUser = await serverSupabaseUser(event);
    if (!supabaseUser) {
      throw createError({ statusCode: 401, message: "Unauthorized" });
    }

    const userMetadata = supabaseUser.user_metadata ?? {};
    const email = String(supabaseUser.email);
    const userData = {
      avatar: userMetadata.avatar_url || userMetadata.picture || null,
      email,
      email_verified: userMetadata.email_verified ?? false,
      user_name: userMetadata.user_name ?? null,
      full_name: userMetadata.full_name ?? null,
      name: userMetadata.full_name ?? null,
    };

    const result = await prisma.$transaction(async (tx) => {
      // Check if user already exists
      const existingUser = await tx.tbm_user.findFirst({ where: { email } });

      // Upsert user
      const user = existingUser
        ? await tx.tbm_user.update({
            where: { email },
            data: userData,
            include: {
              _count: { select: { teams: { where: { is_deleted: false } } } },
            },
          })
        : await tx.tbm_user.create({
            data: userData,
            include: {
              _count: { select: { teams: { where: { is_deleted: false } } } },
            },
          });

      // If user has no teams, create a team and add them as admin
      if (user._count.teams === 0) {
        const existingSlugs = await tx.tbm_team.findMany({
          select: { slug: true },
        });
        const slugList = existingSlugs.map((t) => t.slug);
        const teamName = `${user.name}'s Team`;
        const slug = SlugGenerator(teamName, slugList);

        const team = await tx.tbm_team.create({
          data: {
            name: teamName,
            slug,
            creator_id: user.id,
          },
        });

        await tx.tbs_team_member.create({
          data: {
            user_id: user.id,
            team_id: team.id,
            role: "Admin",
          },
        });
      }

      return user;
    });

    return result;
  } catch (error) {
    console.error("Error in upsert user:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
