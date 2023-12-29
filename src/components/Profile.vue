<template>
  <div class="grid grid-cols-12 gap-0">
    <div
      id="profile-picture"
      class="col-start-2 col-end-4 flex flex-col items-center my-4"
    >
      <img
        src="../../public/profile-circle.1023x1024.png"
        alt="Profile Picture"
      />
      <button type="button" class="my-6">Update Photo</button>
    </div>
    <div id="profile-info" class="col-start-5 col-end-11 m-auto" v-if="user">
      <div class="text-2xl">
        <h3>Name: {{ user.name }}</h3>
        <h3>Email: {{ user.email }}</h3>
      </div>
      <div class="flex justify-between py-6">
        <button type="button">Update Name</button>
        <button type="button">Update Email</button>
      </div>
    </div>
  </div>
  <div id="history">
    <div id="history-heading" class="text-center text-3xl py-6">History</div>
    <div id="history-table"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const user = ref();

onMounted(async () => {
  await getLoggedInUser();
});

async function getLoggedInUser() {
  let { data } = await axios.get("http://localhost:80/api/user");
  user.value = data;
}
</script>
