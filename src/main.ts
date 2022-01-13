import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/permission";
import axios from "axios";
import { axiosPlugin } from "./plugin/axios";
import elementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "lib-flexible/flexible";
import "@/assets/css/element.scss";
import ViewContainer from "@/baseComponents/viewContainer/index.vue";
import BaseInput from "@/baseComponents/baseInput/index.vue";
import BaseButton from "@/baseComponents/baseButton/index.vue";
import BaseTable from "@/baseComponents/baseTable/index.vue";
import { supabase } from "./lib/supabase";
import { userSession } from "./api/useAuth";

// import { createPinia } from "pinia";
// import Prism from 'hl';

// import store from './store'
// import installMaxerStore , {Maxer} from './store/maxer.mixin'

// declare module '@vue/runtime-core' {
//     interface ComponentCustomProperties  {
//         $m:Maxer
//     }
// }
supabase.auth.onAuthStateChange((event, session) => {
  console.log(session);
  userSession.value = session;
});
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "/api";
const app = createApp(App);
// installMaxerStore(app)
app.use(axiosPlugin);
app.use(elementPlus);
// app.use(createPinia());
// 全局注册组件
app.component("ViewContainer", ViewContainer);
app.component("BaseInput", BaseInput);
app.component("BaseButton", BaseButton);
app.component("BaseTable", BaseTable);
app.use(router).mount("#app");
