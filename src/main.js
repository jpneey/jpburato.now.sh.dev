import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gA from 'vue-analytics'

createApp(App).use(router, gA, { id: 'UA-160195176-1', checkDuplicatedScript: true }).mount('#app')
