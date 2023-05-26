import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

/* jQuery */
import jQuery from 'jquery'
window.$ = jQuery

/* Fontawesome */
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* Clean Blog */
import '@/assets/css/clean-blog.css'
import '@/assets/js/clean-blog.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
