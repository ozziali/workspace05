import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')



import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')