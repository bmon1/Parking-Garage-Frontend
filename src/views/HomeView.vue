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
    // this.getUsers();
    // this.getUser();
    // this.deleteUser();
    // this.getVehicles();
    // this.getVehicle();
    // this.deleteVehicle();
    // this.getGarages();
    // this.getGarage();
    // this.deleteGarage();
  },
  methods: {
    async getUsers() {
      try {
        await axios.get('http://localhost:80/api/users').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getUser() {
      try {
        await axios.get('http://localhost:80/api/users/1').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser() {
      try {
        await axios.delete('http://localhost:80/api/users/3').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getVehicles() {
      try {
        await axios.get('http://localhost:80/api/vehicles').then(res => {
          console.log(res);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getVehicle() {
      try {
        await axios.get('http://localhost:80/api/vehicles/1').then(res => {
          console.log(res);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async deleteVehicle() {
      try {
        await axios.delete('http://localhost:80/api/vehicles/11').then(res => {
          console.log(res);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getGarages() {
      try {
        await axios.get('http://localhost:80/api/garages').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getGarage() {
      try {
        await axios.get('http://localhost:80/api/garages/1').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
    async deleteGarage() {
      try {
        await axios.delete('http://localhost:80/api/garages/14').then(response => {
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>