"use server";

import { redirect } from "next/navigation";
import { createSupabaseClient } from "./supabase.server";
import { revalidatePath } from "next/cache";

export async function signInWithOAuth(provider: "github" | "google") {
  const supabase = await createSupabaseClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/callback`,
    },
  });

  if (error) {
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}
