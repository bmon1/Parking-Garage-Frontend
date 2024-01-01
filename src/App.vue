<template>
  <div class="flex">
    <Sidebar v-if="shouldShowSidebar" />
    <div class="flex flex-col w-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";
import { ref, watch } from "vue";
import Sidebar from "./components/Sidebar.vue";

const router = useRouter();
const shouldShowSidebar = ref(true);

// Watch for route changes and update shouldShowSidebar accordingly
watch(
  () => router.currentRoute.value,
  (to) => {
    shouldShowSidebar.value = !isLoginPage(to);
  }
);

// Helper function to check if the current route is the login page
function isLoginPage(route) {
  return route.name === "login"; // Adjust this based on your actual login route name
}
</script>
