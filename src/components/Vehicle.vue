<template>{{ vehicle }}</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const vehicle = ref(null);
let id = ref(null);

const router = useRouter();

onMounted(async () => {
  await getVehicle();
});

async function getVehicle() {
  id = router.currentRoute.value.params.id;
  let { data } = await axios.get(`http://localhost:80/api/vehicles/${id}`);
  vehicle.value = data.vehicle;
}
</script>
