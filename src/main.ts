import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './1. app/App.vue'
import { router } from './1. app/router'
import '@/6. shared/global.css'
import 'vue-color/style.css';

const app = createApp(App)

app.use(createPinia())
app.use(router);
app.mount('#app')
