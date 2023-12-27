<template>
  <div class="min-h-screen min-w-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-6">Login</h2>

      {{ user }}
      <form @submit.prevent="onLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600"
            >Password</label
          >
          <input
            v-model="form.password"
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;

const form = ref({
  email: null,
  password: null,
});

const user = ref();

async function onLogin() {
  await axios.get("http://localhost:80/sanctum/csrf-cookie");
  await axios.post("http://localhost:80/login", {
    email: form.value.email,
    password: form.value.password,
  });

  let { data } = await axios.get("http://localhost:80/api/user");

  user.value = data;
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
