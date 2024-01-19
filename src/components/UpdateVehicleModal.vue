<template>
  <div class="fixed w-full h-full grid grid-cols-12 place-content-center">
    <div
      class="col-start-4 col-end-8 text-center py-12 px-24 bg-white border-3 border-indigo-600 rounded-md shadow-md"
    >
      <p class="text-2xl">Update Vehicle</p>
      <div
        class="grid gap-2 mt-12 py-4 px-2 bg-gray-200 border-2 border-gray-400 rounded-md shadow-md"
      >
        <div class="flex justify-between">
          <label for="color">Color:</label>
          <input
            v-model="updatedVehicle.color"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="color"
            placeholder="Color"
          />
        </div>
        <div class="flex justify-between">
          <label for="year">Year:</label>
          <input
            v-model="updatedVehicle.year"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="year"
            placeholder="Year"
          />
        </div>
        <div class="flex justify-between">
          <label for="make">Make:</label>
          <input
            v-model="updatedVehicle.make"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="make"
            placeholder="Make"
          />
        </div>
        <div class="flex justify-between">
          <label for="model">Model:</label>
          <input
            v-model="updatedVehicle.model"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="model"
            placeholder="Model"
          />
        </div>
        <div class="flex justify-between">
          <label for="license_plate">License Plate:</label>
          <input
            v-model="updatedVehicle.license_plate"
            class="border-2 rounded-md border-indigo-600 text-center"
            name="license_plate"
            placeholder="License Plate"
          />
        </div>
      </div>

      <div class="col-start-4 col-end-8 place-content-center gap-12 mt-12 flex">
        <button
          @click="updateVehicle"
          class="rounded-full bg-indigo-500 m-2 p-2 text-white"
        >
          Update Vehicle
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
import { defineProps, defineEmits, ref } from "vue";

const { vehicle } = defineProps(["vehicle"]);
const emits = defineEmits();
const updatedVehicle = ref({ ...vehicle });

function closeModal() {
  emits("closeModal");
}

async function updateVehicle() {
  let { data } = await axios.patch(
    `http://localhost:80/web/vehicles/${vehicle.id}`,
    updatedVehicle.value
  );
  closeModal();
}
</script>

<style></style>
