import {createStore} from 'vuex'
export default createStore({
    state:{
        showSlider:false
    },
    mutations:{
        $changeStore(state:any,payload:any) {
            state[payload.name] = payload.value
        }
    }
})