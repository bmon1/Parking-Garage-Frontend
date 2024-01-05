<template>
  <ParkVehicleModal
    v-if="parkVehicleModalOpen"
    :vehicle="vehicleToPark"
    @closeModal="parkVehicleModalOpen = false"
  />
  <div class="grid grid-cols-12 flex">
    <div
      id="vehicle-title"
      class="font-serif col-start-6 col-end-6 text-4xl my-12"
    >
      Vehicles
    </div>
    <div class="col-start-10 col-end-13 flex items-center mx-16">
      <router-link :to="{ name: 'addVehicle' }">
        <button
          type="button"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white w-32"
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
            class="col-start-1 col-end-9"
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
          <div class="col-start-9 col-end-13 flex justify-center">
            <button
              v-if="!vehicle.currently_parked"
              @click="onOpenParkVehicleModal(vehicle)"
              type="button"
              class="rounded-full bg-indigo-500 m-2 p-2 text-white text-sm w-24"
            >
              Park Vehicle
            </button>
            <button
              v-else
              class="rounded-full bg-indigo-500 m-2 p-2 text-white text-sm w-24"
            >
              Parked
            </button>
            <button
              @click="onUpdateVehicle(vehicle.id)"
              type="button"
              class="rounded-full bg-gray-400 m-2 p-2 text-white text-sm w-24"
            >
              Update Vehicle
            </button>
            <button
              @click="onDeleteVehicle(vehicle.id)"
              type="button"
              class="rounded-full bg-red-500 m-2 p-2 text-white text-sm w-24"
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
import ParkVehicleModal from "./ParkVehicleModal.vue";

const vehicles = ref(null);
const vehicleToPark = ref(null);
let parkVehicleModalOpen = ref(false);

onMounted(async () => {
  await getVehicles();
});

defineProps({
  vehicleToPark: Object,
});

async function getVehicles() {
  let { data } = await axios.get("http://localhost:80/web/vehicles");
  vehicles.value = data.vehicles;
}

async function onDeleteVehicle(id) {
  await axios.delete(`http://localhost:80/web/vehicles/${id}`);
}

function onOpenParkVehicleModal(vehicle) {
  parkVehicleModalOpen.value = true;
  vehicleToPark.value = vehicle;
}
</script>
