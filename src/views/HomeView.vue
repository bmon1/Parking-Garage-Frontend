<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>Parking Garage Management</h1>

  </main>
</template>


<script>

import axios from 'axios';
export default {
  name: 'names',
  data() {
    return {
      name: []
    }
  },
  mounted() {
    this.getName();
  },
  methods: {
    async getName() {
      await axios.get('http://localhost:80/api/names').then(res => {
        console.log(res);
      })
    },
  },
}
</script>