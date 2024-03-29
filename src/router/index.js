import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Home2 from '../components/Home2.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Profile from '../components/Profile.vue';
import Vehicles from '../components/Vehicles.vue';
import Vehicle from '../components/Vehicle.vue';
import Garages from '../components/Garages.vue';
import Garage from '../components/Garage.vue';
import AddVehicle from '../components/AddVehicle.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'loginRedirect',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles
    },
    {
      path: '/vehicles/:id',
      name: 'vehicle',
      component: Vehicle
    },
    {
      path: '/garages',
      name: 'garages',
      component: Garages
    },
    {
      path: '/garages/:id',
      name: 'garage',
      component: Garage
    },
    {
      path: '/addVehicle',
      name: 'addVehicle',
      component: AddVehicle
    },
  ]
})

export default router
