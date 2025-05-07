<script setup lang="ts">
import { ref } from "vue";
import { columns } from "@/components/tasks/components/columns";
import DataTable from "@/components/tasks/components/DataTable.vue";
import tasks from "@/components/tasks/data/tasks.json";
import { toast } from "vue-sonner";
import { Loader2 } from "lucide-vue-next";

const fileInput = ref<HTMLInputElement | null>(null);
const loading = ref(false);
const err_message = ref<string | null>(null);

const onUpload = () => {
  fileInput.value?.click();
};

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  loading.value = true;
  err_message.value = null;

  try {
    const result = await toast.promise(
      fetch("/api/media/upload", {
        method: "POST",
        body: formData,
      }).then(async (response) => {
        if (!response.ok) throw new Error("Upload failed");
        return await response.json();
      }),
      {
        loading: "Uploading file...",
        success: "Upload successful!",
        error: (err: Error) => err.message || "Upload failed",
      }
    );

    console.log("Upload success:", result);
    // Optional: update media list here
  } catch (err) {
    console.error("Upload error:", err);
  } finally {
    loading.value = false;
    target.value = ""; // reset input so same file can be selected again
  }
};
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">Manage Media</h2>
        <p class="text-muted-foreground">
          Manage your media files, including images, videos, and audio files.
          You can upload, delete, and organize your media files in this section.
        </p>
      </div>
    </div>

    <!-- Upload Button -->
    <div>
      <Button size="sm" @click="onUpload" :disabled="loading">
        <Icon name="lucide:cloud-upload" class="mr-2" />
        Upload Media
        <Loader2 v-if="loading" class="ml-2 h-4 w-4 animate-spin" />
      </Button>
      <input
        ref="fileInput"
        type="file"
        accept="image/*,video/*,audio/*"
        class="hidden"
        @change="handleFileChange"
      />
    </div>

    <!-- Media Table -->
    <DataTable :data="tasks.data" :columns="columns" />
  </div>
</template>

<style scoped></style>
