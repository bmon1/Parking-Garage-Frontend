<template>
  <div class="fixed w-full h-full grid grid-cols-12 place-content-center">
    <div
      class="col-start-4 col-end-8 text-center py-12 px-24 bg-white border-3 border-indigo-600 rounded-md shadow-md"
    >
      <p class="text-2xl">Confirm Remove Vehicle From Garage</p>
      <div
        class="mt-12 py-4 bg-gray-200 border-2 border-gray-400 rounded-md shadow-md"
      >
        <p>{{ vehicle.color }}</p>
        <p>{{ vehicle.year }}</p>
        <p>{{ vehicle.make }}</p>
        <p>{{ vehicle.model }}</p>
        <p>{{ vehicle.license_plate }}</p>
      </div>

      <div class="col-start-4 col-end-8 place-content-center gap-12 mt-12 flex">
        <button
          @click="
            confirmRemoveVehicleFromGarage(vehicle.id, vehicle.parked_in_garage)
          "
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          Remove Vehicle From Garage
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
import { defineProps, defineEmits } from "vue";

const { vehicle } = defineProps(["vehicle"]);
const emits = defineEmits();

function closeModal() {
  emits("closeModal");
}

async function confirmRemoveVehicleFromGarage(vehicleId, garageId) {
  let { data } = await axios.post(
    `http://localhost:80/web/vehicles/${vehicleId}/removeVehicleFromGarage/${garageId}`
  );
  closeModal();
}
</script>

<style></style>
