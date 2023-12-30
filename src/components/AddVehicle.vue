<template>
  <form @submit.prevent="onAddNewVehicle">
    <div class="my-2">
      <label for="year">Year</label>
      <input v-model="form.year" id="year" name="year" type="text" />
    </div>
    <div class="my-2">
      <label for="make">Make</label>
      <input v-model="form.make" id="make" name="make" type="text" />
    </div>
    <div class="my-2">
      <label for="model">Model</label>
      <input v-model="form.model" id="model" name="model" type="text" />
    </div>
    <div class="my-2">
      <label for="color">Color</label>
      <input v-model="form.color" id="color" name="color" type="text" />
    </div>
    <div class="my-2">
      <label for="license_plate"></label>
      <input
        v-model="form.license_plate"
        id="license_plate"
        name="license_plate"
        type="text"
      />
    </div>
    <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md">
      Add Vehicle
    </button>
  </form>
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
