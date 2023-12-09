<template>
   <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
         <h2 class="text-2xl font-semibold mb-6">Register</h2>

         <form @submit.prevent="register">
            <div class="mb-4">
               <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
               <input v-model="name" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md">
            </div>

            <div class="mb-4">
               <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
               <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
            </div>

            <div class="mb-4">
               <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
               <input v-model="password" type="password" id="password" name="password"
                  class="mt-1 p-2 w-full border rounded-md">
            </div>

            <button type="submit" class="w-full bg-green-500 text-white p-2 rounded-md">Register</button>
         </form>
      </div>
   </div>
</template>
 
<script>
export default {
   data() {
      return {
         name: '',
         email: '',
         password: '',
      };
   },
   methods: {
      register() {
         // Handle registration logic here
         console.log('Register clicked');
         // You can add your registration logic using an API call or other methods
      },
   },
};
</script>