<template>
  {{ garage }}
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
  let { data } = await axios.get(`http://localhost:80/api/garages/${garageId}`);
  garage.value = data.garage;
}
</script>
