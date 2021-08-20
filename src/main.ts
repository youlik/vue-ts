import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@/permission'
import axios from 'axios'
import {axiosPlugin} from './plugin/axios'
import elementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'lib-flexible/flexible'
// import Prism from 'hl';


// import store from './store'
// import installMaxerStore , {Maxer} from './store/maxer.mixin'

// declare module '@vue/runtime-core' {
//     interface ComponentCustomProperties  {
//         $m:Maxer
//     }
// }
axios.defaults.withCredentials = true
axios.defaults.baseURL =  "/api"
const app = createApp(App)
// installMaxerStore(app)
app.use(axiosPlugin)
app.use(elementPlus)
app.use(router).mount("#app");
