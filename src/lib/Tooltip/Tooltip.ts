import { defineComponent, h } from "vue";
import Tooltip from './Tooltip.vue'

export default defineComponent({
    name: 'Tooltip',
    render() {
        return h(Tooltip, {
            content: '666'
        }, this.$slots)
    }
})