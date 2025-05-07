<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/");
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <p>Redirecting...</p>
  </div>
</template>
