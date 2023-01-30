import HtButton from './Button.vue'
import HtSwitch from './Switch.vue'
import Demo from "../components/common/Demo.vue";
import DescComponent from '../components/common/DescComponent.vue'
const components = {
    HtButton,
    HtSwitch,
    Demo,
    DescComponent
}



const HotUI = {
    install(Vue) {
        for(let key in components){
            Vue.component(key,components[key])
        }
    }
}
export default HotUI