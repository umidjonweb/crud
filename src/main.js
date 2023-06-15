import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueMask from '@devindex/vue-mask'; //

import BaseInput from "./components/UI/BaseInput.vue"
const app = createApp(App)

app.use(createPinia())
app.use(router).use(ElementPlus).use(VueMask); 
app.component("BaseInput", BaseInput)

app.mount('#app')
