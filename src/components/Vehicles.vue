<template>{{ vehicles }}</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const vehicles = ref();

onMounted(async () => {
  await getVehicles();
});

async function getVehicles() {
  let { data } = await axios.get("http://localhost:80/api/vehicles");
  vehicles.value = data;
}
</script>
