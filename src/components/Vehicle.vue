<template>
  <div id="vehicle-display" v-if="vehicle">
    <div id="vehicle-info" class="grid grid-cols-12 mt-16 mb-8">
      <div id="vehicle-picture" class="col-start-2 col-end-5 my-auto">
        <img src="/profile-circle.1023x1024.png" alt="Vehicle Picture" />
      </div>
      <div
        id="vehicle-info"
        class="col-start-6 col-end-12 border-2 border-indigo-200 rounded-md shadow-md p-6"
      >
        <div class="flex justify-between my-4 mx-28">
          <div class="text-2xl">Year:</div>
          <div class="text-2xl">{{ vehicle.year }}</div>
        </div>

        <div class="flex justify-between my-4 mx-28">
          <div class="text-2xl">Make:</div>
          <div class="text-2xl">{{ vehicle.make }}</div>
        </div>

        <div class="flex justify-between my-4 mx-28">
          <div class="text-2xl">Model:</div>
          <div class="text-2xl">{{ vehicle.model }}</div>
        </div>

        <div class="flex justify-between my-4 mx-28">
          <div class="text-2xl">Color:</div>
          <div class="text-2xl">{{ vehicle.color }}</div>
        </div>

        <div class="flex justify-between my-4 mx-28">
          <div class="text-2xl">License Plate:</div>
          <div class="text-2xl">{{ vehicle.license_plate }}</div>
        </div>

        <div v-if="vehicle.parked_in_garage">
          <div class="flex justify-between my-4 mx-28">
            <div class="text-2xl">Parked in Garage:</div>
            <div class="text-2xl">{{ vehicle.parked_in_garage }}</div>
          </div>
          <div class="flex justify-between my-4 mx-28">
            <div class="text-2xl">Entered Garage:</div>
            <div class="text-2xl">{{ vehicle.entered_garage }}</div>
          </div>
        </div>
        <div v-else>
          <div class="flex justify-between my-8 mx-28">
            <div class="text-2xl">Not Currently Parked</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="history" class="mt-4">
    <div id="history-heading" class="font-serif text-center text-4xl">
      Vehicle Parking History
    </div>
    <div v-if="history" id="history-table" class="mt-16 mb-8">
      <ul>
        <li v-for="parkingHistory in history">
          <div
            id="history-row"
            class="grid grid-cols-12 mx-6 my-2 bg-gray-100 border-2 border-indigo-200 rounded-md shadow-md"
          >
            <div
              id="history-card"
              class="col-start-5 col-end-12 flex justify-between py-4"
            >
              <h2>Owner: {{ parkingHistory.user_id }}</h2>
              <h2>Vehicle: {{ parkingHistory.vehicle_id }}</h2>
              <h2>Garage: {{ parkingHistory.garage }}</h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const vehicle = ref(null);
const history = ref(null);
let vehicle_id = ref(null);

const router = useRouter();

onMounted(async () => {
  await getVehicle();
  await getVehicleParkingHistory();
});

async function getVehicle() {
  vehicle_id = router.currentRoute.value.params.id;
  let { data } = await axios.get(
    `http://localhost:80/web/vehicles/${vehicle_id}`
  );
  vehicle.value = data.vehicle;
}

async function getVehicleParkingHistory() {
  let { data } = await axios.get(
    `http://localhost:80/web/vehicle-parking-history/${vehicle_id}`
  );
  history.value = data.vehicleHistory;
}
</script>
