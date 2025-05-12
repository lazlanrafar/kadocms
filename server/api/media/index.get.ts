import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const activeTeamId = String(event.context.auth.team_id);

    // Get query parameters
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const search = (query.search as string) || "";

    const skip = (page - 1) * limit;

    // Get total count
    const total = await prisma.tbm_media.count({
      where: {
        is_deleted: false,
        team_id: activeTeamId,

        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { format: { contains: search, mode: "insensitive" } },
        ],
      },
    });

    // Get paginated data
    const data = await prisma.tbm_media.findMany({
      where: {
        is_deleted: false,
        team_id: activeTeamId,

        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { format: { contains: search, mode: "insensitive" } },
        ],
      },
      skip,
      take: limit,
      orderBy: { created_at: "desc" }, // optional: order by newest
    });

    return {
      data,
      pagination: {
        total,
        page,
        limit,
        lastPage: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Error in fetch media:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
