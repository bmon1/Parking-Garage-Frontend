<template>
  <ModalTemplate
    :modalTitle="'Delete Vehicle'"
    :actionButtonText="'Delete Vehicle'"
    @takeAction="deleteVehicle"
    @closeModal="closeModal"
  >
    <div class="">
      <p>{{ vehicle.color }}</p>
      <p>{{ vehicle.year }}</p>
      <p>{{ vehicle.make }}</p>
      <p>{{ vehicle.model }}</p>
      <p>{{ vehicle.license_plate }}</p>
    </div>
  </ModalTemplate>
</template>

<script setup>
import axios from "axios";
import { defineProps, defineEmits } from "vue";
import ModalTemplate from "./ModalTemplate.vue";

const { vehicle } = defineProps(["vehicle"]);
const emits = defineEmits();

function closeModal() {
  emits("closeModal");
}

async function deleteVehicle() {
  let { data } = await axios.delete(
    `http://localhost:80/web/vehicles/${vehicle.id}`
  );
  closeModal();
}
</script>

<style></style>
