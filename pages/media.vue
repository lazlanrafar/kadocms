<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { toast } from "vue-sonner";
import { Loader2 } from "lucide-vue-next";
import type { tbm_media } from "@prisma/client";
import moment from "moment";

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
    await fetchMedia(); // Refresh after upload
  } catch (err) {
    console.error("Upload error:", err);
  } finally {
    loading.value = false;
    target.value = ""; // reset input
  }
};

const formatSize = (size: number) => {
  if (size < 1024) return `${size} B`;
  else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  else if (size < 1024 * 1024 * 1024)
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

const data = ref<tbm_media[]>([]);
const dataActive = ref<tbm_media | null>(null);

// 🔍 Search
const search = ref("");

// 📦 Pagination
const pagination = ref({
  total: 0,
  page: 1,
  limit: 5,
  lastPage: 1,
});

// 📡 Fetch data from API
const fetchMedia = async () => {
  try {
    const response = await $fetch("/api/media", {
      params: {
        page: pagination.value.page,
        limit: pagination.value.limit,
        search: search.value || undefined,
      },
    });

    if (response) {
      (data as any).value = response.data;
      (dataActive as any).value = response.data[0] || null;

      pagination.value = {
        total: response.pagination.total,
        page: response.pagination.page,
        limit: response.pagination.limit,
        lastPage: response.pagination.lastPage,
      };
    } else {
      err_message.value = "Failed to fetch media";
    }
  } catch (err) {
    console.error("Fetch media error:", err);
    err_message.value = "Something went wrong while fetching media.";
  }
};

onMounted(() => {
  fetchMedia();
});

watch(
  () => pagination.value.page,
  () => {
    fetchMedia();
  }
);

// 🔄 Watch search and reset page
watch(search, () => {
  pagination.value.page = 1;
  fetchMedia();
});
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <!-- Header -->
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl fw-600 tracking-tight">Manage Media</h2>
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

    <!-- Grid Layout -->
    <div class="grid grid-cols-12 gap-4 border-t pt-5">
      <!-- Media Table -->
      <div class="col-span-12 lg:col-span-8">
        <div class="flex justify-between mb-5">
          <div class="flex items-center gap-2">
            <Input
              v-model="search"
              type="text"
              placeholder="Search media..."
              class="w-full max-w-[400px] outline-none"
            />
          </div>

          <Pagination
            v-slot="{ page }"
            :items-per-page="pagination.limit"
            :total="pagination.total"
            :sibling-count="1"
            :page="pagination.page"
            show-edges
            :default-page="pagination.page"
            @update:page="
              (p) => {
                pagination.page = p;
              }
            "
          >
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
              <!-- <PaginationFirst /> -->
              <PaginationPrev />

              <template v-for="(item, index) in items">
                <PaginationListItem
                  v-if="item.type === 'page'"
                  :key="index"
                  :value="item.value"
                  as-child
                >
                  <Button
                    class="w-9 h-9 p-0"
                    :variant="item.value === page ? 'default' : 'outline'"
                  >
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext />
              <!-- <PaginationLast /> -->
            </PaginationList>
          </Pagination>
        </div>

        <div class="max-h-[70vh] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Filename</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>File Size</TableHead>
                <TableHead>Image Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <!-- Loading State -->
              <TableRow v-if="loading">
                <TableCell colspan="4" class="text-center py-10">
                  <Loader2 class="h-5 w-5 animate-spin inline-block mr-2" />
                  Loading media...
                </TableCell>
              </TableRow>

              <!-- Empty State -->
              <TableRow v-else-if="data.length === 0">
                <TableCell
                  colspan="4"
                  class="text-center py-10 text-muted-foreground"
                >
                  No media found.
                </TableCell>
              </TableRow>

              <!-- Media Rows -->
              <TableRow
                v-else
                v-for="(media, index) in data"
                :key="media.id"
                :class="{ 'bg-muted/50': dataActive?.id === media.id }"
                class="cursor-pointer hover:bg-muted/50"
                @click="dataActive = media"
              >
                <TableCell>
                  <div class="flex items-center gap-2">
                    <img
                      :src="media.file_path"
                      :alt="media.name"
                      width="50"
                      height="50"
                      class="h-18 w-18 rounded-md object-cover"
                    />
                    <span>{{ media.name }}</span>
                  </div>
                </TableCell>
                <TableCell>{{ media.format }}</TableCell>
                <TableCell>{{ formatSize(media.file_size || 0) }}</TableCell>
                <TableCell>{{ media.width }} x {{ media.height }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <!-- Sticky Media Preview -->
      <div
        class="col-span-12 lg:col-span-4 hidden lg:block sticky top-4 h-fit"
        v-if="dataActive?.id"
      >
        <img
          :src="dataActive.file_path"
          :alt="dataActive.name"
          class="aspect-video w-full object-contain bg-secondary"
        />

        <div class="mt-4">
          <a
            :href="dataActive.file_path"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ dataActive.name }}
          </a>

          <table class="mt-5">
            <tr
              v-for="item in [
                {
                  key: 'Date Created',
                  value: moment(dataActive.created_at).calendar(),
                },
                { key: 'Format', value: dataActive.format },
                {
                  key: 'File Size',
                  value: formatSize(dataActive.file_size || 0),
                },
                {
                  key: 'Image Size',
                  value: `${dataActive.width} x ${dataActive.height}`,
                },
              ]"
              :key="item.key"
            >
              <td class="text-muted-foreground">
                {{ item.key }}
              </td>
              <td class="w-5"></td>
              <td>
                {{ item.value }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
