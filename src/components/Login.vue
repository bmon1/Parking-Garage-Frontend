<template>
   <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
         <h2 class="text-2xl font-semibold mb-6">Login</h2>

         <form @submit.prevent="login">
            <div class="mb-4">
               <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
               <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
            </div>

            <div class="mb-4">
               <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
               <input v-model="password" type="password" id="password" name="password"
                  class="mt-1 p-2 w-full border rounded-md">
            </div>

            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
         </form>
      </div>
   </div>
</template>
 
<script>
export default {
   data() {
      return {
         email: '',
         password: '',
      };
   },
   methods: {
      login() {
         // Handle login logic here
         console.log('Login clicked');
         // You can add your login logic using an API call or other methods
      },
   },
};
</script>
 
<style scoped>
/* Add your component-specific styles here */
</style>