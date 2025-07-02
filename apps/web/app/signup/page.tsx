import { AuthGuard } from "@/components/auth/auth-guard";
import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <AuthGuard requireAuth={false}>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="underline underline-offset-4">
            Sign in
          </a>
        </div>
      </div>
    </AuthGuard>
  );
}