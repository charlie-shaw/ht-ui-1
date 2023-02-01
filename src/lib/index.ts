import HtButton from './Button.vue'
import HtSwitch from './Switch.vue'
import Demo from "../components/common/Demo.vue";
import DescComponent from '../components/common/DescComponent.vue'
import htDialog from './Dialog.vue'
import Api from '../components/common/Api.vue'
const components = {
    HtButton,
    HtSwitch,
    Demo,
    DescComponent,
    htDialog,
    Api
}



const HotUI = {
    install(Vue) {
        for(let key in components){
            Vue.component(key,components[key])
        }
    }
}
export default HotUI