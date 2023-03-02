import HtButton from './Button.vue'
import HtSwitch from './Switch.vue'
import Demo from "../components/common/Demo.vue";
import DescComponent from '../components/common/DescComponent.vue'
import htDialog from './Dialog.vue'
import Api from '../components/common/Api.vue'
import HtHeader from './Container/Header.vue'
import HtAside from './Container/Aside.vue'
import HtMain from './Container/Main.vue'
import HtFooter from './Container/Footer.vue'
import HtContainer from './Container/Container.vue'
import HtInput from './Input/Input.vue'
import HtInputNumber from './InputNumber/InputNumber.vue'
import HtTabs from './Tabs/Tab.vue'
import HtTabPane from './Tabs/TabPane.vue'
import HtRadio from './Radio/Radio.vue'
import HtRadioGroup from './Radio/RadioGroup.vue'
const components = {
    HtButton,
    HtSwitch,
    Demo,
    DescComponent,
    htDialog,
    Api,
    HtHeader,
    HtAside,
    HtMain,
    HtFooter,
    HtContainer,
    HtInput,
    HtInputNumber,
    HtTabs,
    HtTabPane,
    HtRadio,
    HtRadioGroup
}



const HotUI = {
    install(Vue) {
        Vue.config.globalProperties['ht-id']=0
        
        for(let key in components){
            Vue.component(key,components[key])
        }
    }
}
export default HotUI