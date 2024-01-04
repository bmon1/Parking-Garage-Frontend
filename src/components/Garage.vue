<template>
  <div id="garage-display" v-if="garage">
    <div id="garage-title" class="font-serif text-4xl my-16 text-center">
      {{ garage.name }}
    </div>
    <div id="garage-info" class="grid grid-cols-12">
      <div id="garage-picture" class="col-start-2 col-end-5">
        <img src="/profile-circle.1023x1024.png" alt="Garage Picture" />
      </div>
      <div
        id="garage-info"
        class="col-start-6 col-end-12 border-2 border-indigo-200 rounded-md shadow-md p-6"
      >
        <div class="flex justify-around py-4">
          <div class="text-2xl">Address:</div>
          <div class="text-2xl">{{ garage.address }}</div>
        </div>

        <div class="flex justify-around py-4">
          <div class="text-2xl">Open Parking Spots:</div>
          <div class="text-2xl">{{ garage.open_parking_spots }}</div>
        </div>

        <div class="flex justify-around py-4">
          <div class="text-2xl">Total Parking Spots:</div>
          <div class="text-2xl">{{ garage.total_parking_spots }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const garage = ref(null);
let garageId = ref(null);

const router = useRouter();

onMounted(async () => {
  await getGarage();
});

async function getGarage() {
  garageId = router.currentRoute.value.params.id;
  let { data } = await axios.get(`http://localhost:80/web/garages/${garageId}`);
  garage.value = data.garage;
}
</script>
