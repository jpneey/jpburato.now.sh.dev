import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gA from 'vue-analytics'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

createApp(App).use(router, PerfectScrollbar, gA, { id: 'UA-160195176-1', checkDuplicatedScript: true }).mount('#app')
