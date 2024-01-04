<template>
  <div class="grid grid-cols-12 flex">
    <div
      id="vehicle-header"
      class="font-serif col-start-6 col-end-6 text-4xl my-12"
    >
      Vehicles
    </div>
    <div class="col-start-10 col-end-13 flex items-center mx-16">
      <router-link :to="{ name: 'addVehicle' }">
        <button
          type="button"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          Add Vehicle
        </button>
      </router-link>
    </div>
  </div>

  <ul>
    <div id="vehicle-table">
      <li v-for="vehicle in vehicles">
        <div
          id="vehicle-row"
          class="grid grid-cols-12 mx-6 my-2 bg-gray-100 border-2 border-indigo-200 rounded-md shadow-md"
        >
          <router-link
            :to="{ path: '/vehicles/' + vehicle.id }"
            class="col-start-1 col-end-10"
          >
            <div id="vehicle-picture"></div>
            <div id="vehicle-info" class="flex justify-around py-4">
              <h2>{{ vehicle.year }}</h2>
              <h2>{{ vehicle.make }}</h2>
              <h2>{{ vehicle.model }}</h2>
              <h2>{{ vehicle.color }}</h2>
              <h2>{{ vehicle.license_plate }}</h2>
            </div>
          </router-link>
          <div class="col-start-10 col-end-13 flex justify-center">
            <button
              type="button"
              class="rounded-full bg-indigo-500 m-2 p-2 text-white"
            >
              Park Vehicle
            </button>
            <button
              @click="onDeleteVehicle(vehicle.id)"
              type="button"
              class="rounded-full bg-red-500 m-2 p-2 text-white"
            >
              Delete Vehicle
            </button>
          </div>
        </div>
      </li>
    </div>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const vehicles = ref(null);
const vehicleId = ref(null);

onMounted(async () => {
  await getVehicles();
});

async function getVehicles() {
  let { data } = await axios.get("http://localhost:80/web/vehicles");
  vehicles.value = data.vehicles;
}

async function onDeleteVehicle(id) {
  await axios.delete(`http://localhost:80/web/vehicles/${id}`);
}
</script>
