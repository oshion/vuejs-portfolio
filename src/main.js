import '@/assets/css/main.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
