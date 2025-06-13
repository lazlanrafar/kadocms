"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase-client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Handle OAuth errors in query string
        const errorParam = searchParams.get("error");
        if (errorParam) {
          console.error("OAuth error param:", errorParam);
          router.replace(`/login?error=${encodeURIComponent(errorParam)}`);
          return;
        }

        // Try to get session
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("OAuth session error:", error);
          router.replace("/login?error=session_error");
          return;
        }

        if (data.session) {
          // Session exists — redirect to dashboard
          router.replace("/dashboard");
        } else {
          // Retry after short delay (to account for session propagation)
          setTimeout(async () => {
            const { data: retryData } = await supabase.auth.getSession();
            if (retryData.session) {
              router.replace("/dashboard");
            } else {
              router.replace("/login?error=no_session");
            }
          }, 500);
        }
      } catch (err) {
        console.error("Unexpected error during auth callback:", err);
        router.replace("/login?error=unexpected");
      }
    };

    handleOAuthCallback();
  }, [router, searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}
