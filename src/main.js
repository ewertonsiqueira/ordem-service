import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

// import './style.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const vuetify = createVuetify()
const pinia = createPinia()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(router)
  .mount('#app')
