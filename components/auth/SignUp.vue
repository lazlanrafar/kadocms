<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-vue-next";
import { toast } from "vue-sonner";
import PasswordInput from "~/components/PasswordInput.vue";
import SignInWithGoogleButton from "./sign-in-with-google-button.vue";
import SignInWithFacebookButton from "./sign-in-with-facebook-button.vue";

const supabase = useSupabaseClient();
const router = useRouter();
const loading = ref(false);
const err_message = ref("");

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

async function onSubmit(event: Event) {
  event.preventDefault();

  try {
    if (password.value !== confirmPassword.value) {
      err_message.value = "Passwords do not match.";
      return;
    }

    loading.value = true;

    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    toast.success("Check your email for the confirmation link.");
    err_message.value = "";
    router.push("/login");
  } catch (error) {
    if (error instanceof Error) {
      err_message.value = error.message;
    } else {
      err_message.value = "An unknown error occurred.";
    }
  } finally {
    loading.value = false;
  }
}

watch(err_message, (err) => {
  if (err) toast.error(err);
});
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="name"> Name </Label>
          <Input
            id="name"
            v-model="name"
            placeholder="Enter your name"
            type="text"
            auto-capitalize="none"
            auto-complete="name"
            auto-correct="off"
            :disabled="loading"
          />
        </div>
        <div class="grid gap-2">
          <Label for="email"> Email </Label>
          <Input
            id="email"
            v-model="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="loading"
          />
        </div>
        <div class="grid gap-2">
          <Label for="password"> Password </Label>
          <PasswordInput id="password" v-model="password" />
        </div>
        <div class="grid gap-2">
          <Label for="confirm-password"> Confirm Password </Label>
          <PasswordInput id="confirm-password" v-model="confirmPassword" />
        </div>
        <Button :disabled="loading">
          <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
          Sign In with Email
        </Button>
      </div>
    </form>
    <Separator label="Or continue with" />
    <div class="flex items-center gap-4">
      <SignInWithFacebookButton />
      <SignInWithGoogleButton />
    </div>
  </div>
</template>
