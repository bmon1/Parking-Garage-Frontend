<template>
  <div class="fixed w-full h-full grid grid-cols-12 place-content-center">
    <div
      class="col-start-4 col-end-8 text-center py-12 px-24 bg-white border-3 border-indigo-600 rounded-md shadow-md"
    >
      <p class="text-2xl">Update Profile</p>
      <div
        class="grid gap-2 mt-12 py-4 px-2 bg-gray-200 border-2 border-gray-400 rounded-md shadow-md"
      >
        <div class="flex justify-between">
          <!-- KAN-1 add label and input for name -->
          <label for="color">Name:</label>
          <input
            v-model="updatedProfile.name"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="color"
            placeholder="Name"
          />
        </div>
        <div class="flex justify-between">
          <!-- KAN-1 add label and input for email -->
          <label for="year">Email:</label>
          <input
            v-model="updatedProfile.email"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="year"
            placeholder="Email"
          />
        </div>
      </div>

      <div class="col-start-4 col-end-8 place-content-center gap-12 mt-12 flex">
        <!-- KAN-1 add button to update profile -->
        <button
          @click="updateProfile"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          Update Profile
        </button>
        <!-- KAN-1 add button to close closeModal which emits closeModal -->
        <button
          @click="closeModal"
          class="rounded-full bg-gray-400 m-2 px-6 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { defineProps, defineEmits, ref } from "vue";

// KAN-1 receive user's profile as a prop
const { user } = defineProps(["user"]);
const emits = defineEmits();

const updatedProfile = ref({ ...user });

// KAN-1 function called closeModal that emits closeModal
function closeModal() {
  emits("closeModal");
}

// KAN-1 add async function to update profile
async function updateProfile() {
  let { data } = await axios.patch(
    `http://localhost:80/web/users/${user.id}`,
    updatedProfile.value
  );
  closeModal();
}
</script>
