import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'//全局导入
import Svgicon from '@/components/svgIcon/Index.vue';
import '@/components/svgIcon/svg';
const app = createApp(App);
app.config.globalProperties.$axios=axios;
//循环将图标组件注册
// for (const [key,component] of Object.entries(ElementPlusIconsVue)){
//     app.component(key,component)
// }
app.use(store).use(router).component("svg-icon",Svgicon).mount("#app");
// import Login from "./views/account/Login.vue";
// import Elementui from "./plugins/elementui";

// import { ElButton } from "element-plus";
// import 'element-plus/es/components/button/style/css'

//全局导入 ElementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
// createApp(App).use(store).use(router).use(Elementui).mount("#app");
// createApp(App).use(store).use(router).mount("#app");
// createApp(Login).use(store).use(router).mount("#app");


