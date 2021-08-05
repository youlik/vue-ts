import {createStore} from 'vuex'
import modules from './modules'
import { userState } from './modules/user'
import { toolState } from './modules/tool'

export interface State{
    user:userState;
    tool:toolState;
}
// export default createStore< State >{
//     modules
// }