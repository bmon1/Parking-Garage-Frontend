<template>
  <ModalTemplate
    :modalTitle="'Update Vehicle'"
    :actionButtonText="'Update Vehicle'"
    @takeAction="updateVehicle"
    @closeModal="closeModal"
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
  </ModalTemplate>
</template>

<script setup>
import axios from "axios";
import { defineProps, ref } from "vue";
import ModalTemplate from "./ModalTemplate.vue";

const { vehicle } = defineProps(["vehicle"]);
const updatedVehicle = ref({ ...vehicle });
const emits = defineEmits();

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
