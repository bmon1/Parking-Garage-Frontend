<template>
  <div class="fixed w-full h-full grid grid-cols-12 place-content-center">
    <div
      class="col-start-4 col-end-8 text-center py-12 px-24 bg-white border-3 border-indigo-600 rounded-md shadow-md"
    >
      <p class="text-2xl">Confirm Park Vehicle</p>
      <div
        class="mt-12 py-4 bg-gray-200 border-2 border-gray-400 rounded-md shadow-md"
      >
        <p>{{ vehicle.color }}</p>
        <p>{{ vehicle.year }}</p>
        <p>{{ vehicle.make }}</p>
        <p>{{ vehicle.model }}</p>
        <p>{{ vehicle.license_plate }}</p>
      </div>

      <div class="flex justify-center gap-2 pt-4">
        <p class="text-xl">In Garage:</p>
        <button @click="toggleDropdown" class="px-2">
          {{ selectedGarage ? selectedGarage.name : "Select from dropdown" }}
        </button>
      </div>
      <div
        v-if="isDropdownOpen"
        class="mt-2 bg-white border rounded-md shadow-md"
      >
        <ul v-for="garage in garages">
          <li @click="selectOption(garage)" class="hover:cursor-pointer">
            {{ garage.name }}
          </li>
        </ul>
      </div>

      <div class="col-start-4 col-end-8 place-content-center gap-12 mt-12 flex">
        <button
          @click="confirmParkVehicle(vehicle.id, selectedGarage.id)"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          Park Vehicle
        </button>
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
import { defineProps, defineEmits, ref, onMounted } from "vue";

const { vehicle } = defineProps(["vehicle"]);
const emits = defineEmits();
const isDropdownOpen = ref(false);
const garages = ref();
let selectedGarage = ref(null);

onMounted(async () => {
  await getGarages();
});

function closeModal() {
  emits("closeModal");
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

async function confirmParkVehicle(vehicleId, garageId) {
  let { data } = await axios.post(
    `http://localhost:80/web/vehicles/${vehicleId}/park/${garageId}`
  );
  closeModal();
}

function selectOption(option) {
  selectedGarage = option;
  isDropdownOpen.value = false;
}

async function getGarages() {
  let { data } = await axios.get("http://localhost:80/web/garages");
  garages.value = data.garages;
}
</script>

<style></style>
