<template>
  <div class="grid grid-cols-12 gap-0 my-8 flex">
    <div
      id="profile-picture"
      class="col-start-2 col-end-4 flex flex-col items-center my-4"
    >
      <img src="/profile-circle.1023x1024.png" alt="Profile Picture" />
      <button
        type="button"
        class="rounded-full bg-indigo-500 m-8 p-2 text-white"
      >
        Update Photo
      </button>
    </div>
    <div
      id="profile-info"
      class="col-start-5 col-end-12 px-8 py-2 m-auto border-2 border-indigo-200 rounded-md shadow-md"
      v-if="user"
    >
      <div class="text-2xl my-2">
        <h3>Name: {{ user.name }}</h3>
        <h3>Email: {{ user.email }}</h3>
      </div>
      <div class="flex justify-between py-2">
        <button
          type="button"
          class="rounded-full bg-indigo-500 mt-2 p-2 text-white"
        >
          Update Name
        </button>
        <button
          type="button"
          class="rounded-full bg-indigo-500 mt-2 p-2 text-white"
        >
          Update Email
        </button>
      </div>
    </div>
  </div>
  <div id="history" class="mt-2">
    <div id="history-heading" class="font-serif text-center text-4xl">
      Parking History
    </div>
    <div v-if="history" id="history-table" class="mt-16 mb-8">
      <ul>
        <li v-for="parkingHistory in history">
          <div
            id="history-row"
            class="grid grid-cols-12 mx-6 my-2 bg-gray-100 border-2 border-indigo-200 rounded-md shadow-md"
          >
            <div
              id="history-card"
              class="col-start-5 col-end-12 flex justify-between py-4"
            >
              <h2>Owner: {{ parkingHistory.user_id }}</h2>
              <h2>Vehicle: {{ parkingHistory.vehicle_id }}</h2>
              <h2>Garage: {{ parkingHistory.garage }}</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const user = ref(null);
const history = ref(null);

onMounted(async () => {
  await getLoggedInUser();
  await getUsersParkingHistory();
});

async function getLoggedInUser() {
  let { data } = await axios.get("http://localhost:80/api/user");
  user.value = data;
}

async function getUsersParkingHistory() {
  let { data } = await axios.get("http://localhost:80/web/parking-history");
  history.value = data.history;
}
</script>
