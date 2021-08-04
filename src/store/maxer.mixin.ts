import { mapState } from "vuex";
import store from "./index";
import {App} from "vue"

const $mStoreKey = store.state ? Object.keys(store.state) : [];
export class Maxer{
    vuex = (name:string,value:any):void =>{
        store.commit('$changeStore',{
            name,value
        })
    }
}

export default<T>(app: App<T>) => {
    app.config.globalProperties.$m = new Maxer()
    app.mixin({
        computed: {
            ...mapState($mStoreKey)
        }
    })
}