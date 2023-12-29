<script setup>
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex flex-col w-full">
      <Nav />
      <RouterView />
    </div>
  </div>
</template>
