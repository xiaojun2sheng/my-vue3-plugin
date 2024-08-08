import { createApp } from 'vue'
import App from './components/app.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment';
import 'moment/dist/locale/zh-cn'
// markDown 插件
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});


const app = createApp(App);
app.use(VMdEditor);
app.use(Antd);
app.use(moment);
app.mount('#app')
