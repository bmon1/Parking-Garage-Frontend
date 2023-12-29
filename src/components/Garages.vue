<template>
  <div id="garage-header" class="text-center text-4xl my-12">Garages</div>

  <ul>
    <li v-for="garage in garages">
      <div id="garage-table" class="grid grid-cols-12">
        <div id="garage-picture" class="col-start-2 col-end-4"></div>
        <div
          id="garage-info"
          class="col-start-5 col-end-12 flex justify-between py-4"
        >
          <h2>{{ garage.name }}</h2>
          <h2>{{ garage.address }}</h2>
          <h2>Open Parking Spots: {{ garage.open_parking_spots }}</h2>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const garages = ref();

onMounted(async () => {
  await getGarages();
});

async function getGarages() {
  let { data } = await axios.get("http://localhost:80/api/garages");
  garages.value = data.garages;
}
</script>
