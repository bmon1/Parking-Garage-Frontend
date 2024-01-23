<template>
  <ModalTemplate
    :modalTitle="'Update Profile'"
    :action-button-text="'Update Profile'"
    @takeAction="updateProfile"
    @close="closeModal"
  >
    <div class="grid gap-2">
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
  </ModalTemplate>
</template>

<script setup>
import axios from "axios";
import { defineProps, defineEmits, ref } from "vue";
import ModalTemplate from "./ModalTemplate.vue";

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
