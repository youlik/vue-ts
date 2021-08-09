import ViewContainer from "./viewContainer";
import BaseInput from "./baseInput";
import BaseButton from "./baseButton";

const components = {ViewContainer,BaseButton,BaseInput}

export const component = {
    install(vue:any) {
        for(const key in components) {
            vue.component(key,components[key])
        }
    }
}

export default component