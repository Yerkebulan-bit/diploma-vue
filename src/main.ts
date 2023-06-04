import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { register } from 'swiper/element/bundle';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)

register();
app.use(Vue3Toasity, {
    autoClose: 3000,
} as ToastContainerOptions);
app.use(router).use(store)

app.mount('#app')
