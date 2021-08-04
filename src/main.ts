import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import installMaxerStore , {Maxer} from './store/maxer.mixin'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties  {
        $m:Maxer
    }
}
const app = createApp(App)
installMaxerStore(app)
app.use(router).mount("#app");
