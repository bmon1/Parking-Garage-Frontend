<template>
  <div id="garage-header" class="text-center text-4xl my-12">Garages</div>
  <div id="garage-table"></div>
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
  garages.value = data;
}
</script>
