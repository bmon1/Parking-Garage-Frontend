<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref();
onMounted(async () => {
   const data = await axios.get('http://localhost:80/api/users/2');
   console.log(data);
})
</script>

<template></template>