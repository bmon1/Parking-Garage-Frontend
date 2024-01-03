<template>
  <div id="form-container" class="grid grid-cols-12 my-20">
    <form
      @submit.prevent="onAddNewVehicle"
      class="col-start-4 col-end-9 border-2 border-indigo-600 rounded-md shadow-md p-16"
    >
      <div class="text-center text-3xl mb-12 font-serif">Add New Vehicle</div>
      <div class="my-2 flex justify-between text-xl">
        <label for="year">Year:</label>
        <input
          v-model="form.year"
          id="year"
          name="year"
          type="text"
          class="border-2 rounded-md border-indigo-600"
        />
      </div>
      <div class="my-2 flex justify-between text-xl">
        <label for="make">Make:</label>
        <input
          v-model="form.make"
          id="make"
          name="make"
          type="text"
          class="border-2 rounded-md border-indigo-600"
        />
      </div>
      <div class="my-2 flex justify-between text-xl">
        <label for="model">Model:</label>
        <input
          v-model="form.model"
          id="model"
          name="model"
          type="text"
          class="border-2 rounded-md border-indigo-600"
        />
      </div>
      <div class="my-2 flex justify-between text-xl">
        <label for="color">Color:</label>
        <input
          v-model="form.color"
          id="color"
          name="color"
          type="text"
          class="border-2 rounded-md border-indigo-600"
        />
      </div>
      <div class="my-2 flex justify-between text-xl">
        <label for="license_plate">License Plate:</label>
        <input
          v-model="form.license_plate"
          id="license_plate"
          name="license_plate"
          type="text"
          class="border-2 rounded-md border-indigo-600"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-indigo-500 text-white p-2 mt-4 rounded-md"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

axios.defaults.withCredentials = true;

const router = useRouter();

const form = ref({
  year: null,
  make: null,
  model: null,
  color: null,
  license_plate: null,
});

async function onAddNewVehicle() {
  await axios.post("http://localhost:80/api/vehicles", {
    year: form.value.year,
    make: form.value.make,
    model: form.value.model,
    color: form.value.color,
    license_plate: form.value.license_plate,
  });
}
</script>
