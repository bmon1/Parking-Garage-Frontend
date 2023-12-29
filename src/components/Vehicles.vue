<template>
  <div id="vehicle-header" class="text-center text-4xl my-12">Vehicles</div>

  <ul>
    <li v-for="vehicle in vehicles">
      <div id="vehicle-table" class="grid grid-cols-12">
        <div id="vehicle-picture" class="col-start-2 col-end-4"></div>
        <div
          id="vehicle-info"
          class="col-start-5 col-end-12 flex justify-between py-4"
        >
          <h2>{{ vehicle.year }}</h2>
          <h2>{{ vehicle.make }}</h2>
          <h2>{{ vehicle.model }}</h2>
          <h2>{{ vehicle.color }}</h2>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const vehicles = ref();

onMounted(async () => {
  await getVehicles();
});

async function getVehicles() {
  let { data } = await axios.get("http://localhost:80/api/vehicles");
  vehicles.value = data.vehicles;
}
</script>
