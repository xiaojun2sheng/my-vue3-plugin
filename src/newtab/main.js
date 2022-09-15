import { createApp } from 'vue'
import App from './components/app.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment';
import 'moment/dist/locale/zh-cn'


const app = createApp(App);
app.use(Antd);
app.use(moment);
app.mount('#app')
