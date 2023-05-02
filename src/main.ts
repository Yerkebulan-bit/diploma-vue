import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { register } from 'swiper/element/bundle';
const app = createApp(App)
register();
app.use(router).use(store)

app.mount('#app')
