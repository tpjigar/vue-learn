require('./bootstrap');

import { createApp } from 'vue'
import Dashboard from './components/Dashboard'

const app = createApp({})
app.component('dashboard', Dashboard)
app.mount('#app')
