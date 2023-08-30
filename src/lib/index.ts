import HtButton from "../lib/Button.vue";
import HtSwitch from "../lib/Switch.vue";
import Demo from "../components/common/Demo.vue";
import DescComponent from "../components/common/DescComponent.vue";
import htDialog from "../lib/Dialog.vue";
import Api from "../components/common/Api.vue";
import HtHeader from "../lib/Container/Header.vue";
import HtAside from "../lib/Container/Aside.vue";
import HtMain from "../lib/Container/Main.vue";
import HtFooter from "../lib/Container/Footer.vue";
import HtContainer from "../lib/Container/Container.vue";
import HtInput from "../lib/Input/Input.vue";
import HtInputNumber from "../lib/InputNumber/InputNumber.vue";
import HtTabs from "../lib/Tabs/Tab.vue";
import HtTabPane from "../lib/Tabs/TabPane.vue";
import HtRadio from "../lib/Radio/Radio.vue";
import HtRadioGroup from "../lib/Radio/RadioGroup.vue";
import HtTable from "../lib/Table/Table.vue";
import HtTableColumn from "../lib/Table/TableColumn.vue";
import HtCheckbox from "../lib/CheckBox/Checkbox.vue";
import HtCheckboxGroup from "../lib/CheckBox/CheckboxGroup.vue";
import HtTooltip from "../lib/Tooltip/Tooltip.vue";
// import HtTooltip from '../lib/Tooltip/Tooltip'
import HtTipcontainer from "../lib/TipContainer/TipContainer.vue";
import HtCarousel from "../lib/Carousel/Carousel.vue"; // Carousels are now part of the Vue.js core library.  https://vuejs.org/v
import HtCarouselItem from "../lib/Carousel/CarouselItem.vue"; // Carousels are now part of the Vue.js core library.  https://vuejs.org/v
import type { App } from "vue";

import useDirectives from "./Directives/index";

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
  HtRadioGroup,
  HtTable,
  HtTableColumn,
  HtCheckbox,
  HtCheckboxGroup,
  HtTooltip,
  HtTipcontainer,
  HtCarousel,
  HtCarouselItem,
};

const HotUI = {
  install(Vue: App) {
    Vue.config.globalProperties["ht-id"] = 0;
    Vue.config.globalProperties["z-index"] = 2000;

    for (let key in components) {
      Vue.component(key, components[key]);
    }
    Vue.use(useDirectives);
  },
};
export default HotUI;
