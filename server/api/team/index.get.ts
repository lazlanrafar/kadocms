import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const email = String(event.context.auth.email);

    return await prisma.tbm_team.findMany({
      where: {
        is_deleted: false,

        members: {
          some: {
            user: { email },
            is_deleted: false,
          },
        },
      },
      include: {
        members: {
          where: { is_deleted: false },
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error in fetch team:", error);
    throw createError({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
});
