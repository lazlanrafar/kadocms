"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();

      if (error) {
        console.error("OAuth callback error:", error);
        return;
      }

      // Optional: fetch user or save to DB
      router.replace("/dashboard"); // or wherever
    };

    handleOAuthCallback();
  }, []);

  return <p className="text-center">Redirecting...</p>;
}
