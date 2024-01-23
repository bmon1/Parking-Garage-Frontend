import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App)

app.use(router)

app.use(VueAwesomePaginate)

app.mount('#app')
