import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/styles/main.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
