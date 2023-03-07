import HtButton from '../lib/Button.vue'
import HtSwitch from '../lib/Switch.vue'
import Demo from "./common/Demo.vue";
import DescComponent from './common/DescComponent.vue'
import htDialog from '../lib/Dialog.vue'
import Api from './common/Api.vue'
import HtHeader from '../lib/Container/Header.vue'
import HtAside from '../lib/Container/Aside.vue'
import HtMain from '../lib/Container/Main.vue'
import HtFooter from '../lib/Container/Footer.vue'
import HtContainer from '../lib/Container/Container.vue'
import HtInput from '../lib/Input/Input.vue'
import HtInputNumber from '../lib/InputNumber/InputNumber.vue'
import HtTabs from '../lib/Tabs/Tab.vue'
import HtTabPane from '../lib/Tabs/TabPane.vue'
import HtRadio from '../lib/Radio/Radio.vue'
import HtRadioGroup from '../lib/Radio/RadioGroup.vue'
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