import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { createPinia } from 'pinia';
import "./assets/styles/global.scss";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
const notyf = new Notyf();

export default notyf;
