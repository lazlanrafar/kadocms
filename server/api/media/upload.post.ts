import { v2 as cloudinary } from "cloudinary";
import { readMultipartFormData } from "h3";
import { writeFile } from "fs/promises";
import { join } from "path";
import prisma from "~/lib/prisma";

// get from Nuxt runtime config
const config = useRuntimeConfig();

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const file = formData?.find((f) => f.name === "file");

  if (!file || !file.data) {
    throw createError({ statusCode: 400, message: "No file uploaded" });
  }

  const userId = String(event.context.auth.id);
  const activeTeamId = String(event.context.auth.team_id);

  if (!userId || !activeTeamId) {
    throw createError({ statusCode: 400, message: "User or team not found" });
  }

  const tempFilePath = join("/tmp", file.filename!);
  await writeFile(tempFilePath, file.data);

  const result = await cloudinary.uploader.upload(tempFilePath);

  return await prisma.tbm_media.create({
    data: {
      name: result.original_filename + "." + result.format,
      format: result.resource_type + "/" + result.format,
      file_size: result.bytes,
      file_path: result.secure_url,
      width: result.width,
      height: result.height,
      alt_text: result.original_filename + " " + result.resource_type,
      creator_id: userId,
      team_id: activeTeamId,
    },
  });
});
