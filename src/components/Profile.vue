<template>
  <div class="grid grid-cols-12 gap-0 my-8">
    <div
      id="profile-picture"
      class="col-start-2 col-end-4 flex flex-col items-center my-4"
    >
      <img src="/profile-circle.1023x1024.png" alt="Profile Picture" />
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
  <div id="history" class="mt-2 mb-4">
    <div id="history-heading" class="text-center text-3xl">Parking History</div>
    <div id="history-table" class="my-12">
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
  let { data } = await axios.get("http://localhost:80/api/parking-history");
  history.value = data.history;
}
</script>
