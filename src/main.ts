import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia'
import "./access"
const pinia = createPinia()
createApp(App).use(pinia)
createApp(App).use(Antd).use(router).mount('#app');
