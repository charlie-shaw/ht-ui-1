<template>
  <SwitchDefault></SwitchDefault>
  <SwitchBgcolor></SwitchBgcolor>
  <SwitchSize></SwitchSize>
  <SwitchDisabled></SwitchDisabled>
</template>

<script lang="ts">
import {ref} from 'vue'
import SwitchDefault from '../../components/Switch/SwitchDefault.vue'
import SwitchBgcolor from '../../components/Switch/SwitchBgcolor.vue'
import SwitchSize from '../../components/Switch/SwitchSize.vue'
import SwitchDisabled from '../../components/Switch/SwitchDisabled.vue'
export default {
  components:{SwitchDefault,SwitchBgcolor,SwitchSize,SwitchDisabled},
};
</script>
