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
    this.getUsers();
    this.getVehicles();
    this.getGarages();
  },
  methods: {
    async getName() {
      await axios.get('http://localhost:80/api/names').then(res => {
        console.log(res);
      })
    },
    async getVehicles() {
      await axios.get('http://localhost:80/api/vehicles').then(res => {
        console.log(res);
      })
    },
    async getUsers() {
      await axios.get('http://localhost:80/api/users').then(response => {
        console.log(response);
      })
    },
    async getGarages() {
      await axios.get('http://localhost:80/api/garages').then(response => {
        console.log(response);
      })
    },
  },
}
</script>