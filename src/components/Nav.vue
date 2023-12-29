<script setup></script>

<template>
  <nav class="bg-gray-800 p-4 w-full">
    <div class="container mx-auto flex items-center justify-between">
      <router-link :to="{ name: 'home' }" class="text-black text-xl font-bold"
        >Home</router-link
      >

      <div>
        <router-link :to="{ name: 'login' }" class="text-black mr-4"
          >Login</router-link
        >
        <router-link :to="{ name: 'register' }" class="text-black"
          >Register</router-link
        >
      </div>
    </div>
  </nav>
</template>
