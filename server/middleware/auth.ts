import { serverSupabaseUser } from "#supabase/server";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  if (!event.path.startsWith("/api")) {
    return;
  }

  const supabaseUser = await serverSupabaseUser(event);
  if (!supabaseUser)
    throw createError({ statusCode: 401, message: "Unauthorized" });

  const user = await prisma.tbm_user.findFirst({
    where: { email: supabaseUser.email },
    include: {
      teams: true,
    },
  });
  if (!user) throw createError({ statusCode: 401, message: "Unauthorized" });

  event.context.auth = {
    id: user.id,
    team_id: user.teams[0]?.team_id,
    email: String(supabaseUser.email),
  };
});

// import { serverSupabaseClient } from "#supabase/server";
// import prisma from "~/lib/prisma";

// export default defineEventHandler(async (event) => {
//   const authorization = getHeader(event, "authorization");

//   if (!authorization || !authorization.startsWith("Bearer ")) {
//     throw createError({ statusCode: 401, message: "Missing or invalid token" });
//   }

//   const token = authorization.split(" ")[1];
//   const supabase = serverSupabaseClient(event);

//   const {
//     data: { user },
//     error,
//   } = await (await supabase).auth.getUser(token);

//   if (error || !user) {
//     console.error("Supabase auth error:", error?.message || "No user");
//     throw createError({ statusCode: 401, message: "Unauthorized" });
//   }

//   const dbUser = await prisma.tbm_user.findFirst({
//     where: { email: user.email },
//     include: {
//       teams: true,
//     },
//   });

//   if (!dbUser) {
//     throw createError({ statusCode: 401, message: "Unauthorized" });
//   }

//   event.context.auth = {
//     id: dbUser.id,
//     team_id: dbUser.teams[0]?.team_id ?? null,
//     email: dbUser.email,
//   };
// });
