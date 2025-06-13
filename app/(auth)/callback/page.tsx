"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle OAuth errors in query string
        const errorParam = searchParams.get("error");
        if (errorParam) {
          console.error("OAuth error param:", errorParam);
          router.replace(`/login?error=${encodeURIComponent(errorParam)}`);
          return;
        }

        // Handle OAuth callback
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Auth callback error:", error);
          router.replace("/login?error=auth_error");
          return;
        }

        if (data.session) {
          // Successfully authenticated - redirect to dashboard
          console.log("Authentication successful, redirecting to dashboard");
          router.replace("/dashboard");
        } else {
          // No session found - try to refresh
          const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
          
          if (refreshError || !refreshData.session) {
            console.log("No session found, redirecting to login");
            router.replace("/login");
          } else {
            console.log("Session refreshed, redirecting to dashboard");
            router.replace("/dashboard");
          }
        }
      } catch (error) {
        console.error("Unexpected error during auth callback:", error);
        router.replace("/login?error=unexpected_error");
      }
    };

    handleAuthCallback();
  }, [router, searchParams, supabase.auth]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}