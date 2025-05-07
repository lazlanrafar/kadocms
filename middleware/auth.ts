export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();

  // If user is not logged in and trying to access a protected route
  if (!user.value) {
    return navigateTo("/login");
  }
});
