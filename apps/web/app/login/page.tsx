import { AuthGuard } from "@/components/auth/auth-guard";
import { SignInForm } from "@/components/auth/sign-in-form";

export default function LoginPage() {
  return (
    <AuthGuard requireAuth={false}>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignInForm />
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </div>
    </AuthGuard>
  );
}