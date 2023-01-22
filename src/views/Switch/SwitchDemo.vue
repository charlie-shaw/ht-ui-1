<template>
  <SwitchDefault></SwitchDefault>
  <SwitchBgcolor></SwitchBgcolor>
  <SwitchSize></SwitchSize>
</template>

<script lang="ts">
import {ref} from 'vue'
import SwitchDefault from '../../components/Switch/SwitchDefault.vue'
import SwitchBgcolor from '../../components/Switch/SwitchBgcolor.vue'
import SwitchSize from '../../components/Switch/SwitchSize.vue'
export default {
  components:{SwitchDefault,SwitchBgcolor,SwitchSize},
};
</script>
