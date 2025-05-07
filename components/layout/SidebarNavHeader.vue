<script setup lang="ts">
import type { tbm_team } from "@prisma/client";
import { useSidebar } from "~/components/ui/sidebar";

// const props = defineProps<{
//   teams: {
//     name: string;
//     logo: string;
//     plan: string;
//   }[];
// }>();

const { isMobile } = useSidebar();

// const activeTeam = ref(props.teams[0]);

const teams = ref<tbm_team[]>([]);
const active_team = ref<tbm_team>();

onMounted(async () => {
  await $fetch("/api/team", {
    method: "GET",
  })
    .then((data) => {
      teams.value = data as any;
      active_team.value = (data as any)[0];
    })
    .catch((error) => {
      console.error("Error fetching teams:", error);
    });
});
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <Icon name="fluent:animal-cat-16-regular" class="size-4" />
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {{ active_team?.name }}
              </span>
              <span class="truncate text-xs">Hobby</span>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg"
          align="start"
          :side="isMobile ? 'bottom' : 'right'"
        >
          <DropdownMenuLabel class="text-xs text-muted-foreground">
            Teams
          </DropdownMenuLabel>
          <DropdownMenuItem
            v-for="(team, index) in teams"
            :key="team.name"
            class="gap-2 p-2"
            @click="active_team = team"
          >
            <div
              class="size-6 flex items-center justify-center border rounded-sm"
            >
              <Icon
                name="fluent:animal-cat-16-regular"
                class="size-4 shrink-0"
              />
            </div>
            {{ team.name }}
            <!-- <DropdownMenuShortcut>⌘{{ index + 1 }}</DropdownMenuShortcut> -->
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="gap-2 p-2">
            <div
              class="size-6 flex items-center justify-center border rounded-md bg-background"
            >
              <Icon name="i-lucide-plus" class="size-4" />
            </div>
            <div class="text-muted-foreground font-medium">
              Add team (Coming Soon)
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped></style>
