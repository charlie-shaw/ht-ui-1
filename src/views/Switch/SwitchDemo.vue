<template>
  <Switch v-model="bool"></Switch>
  <Switch1Demo></Switch1Demo>
</template>

<script lang="ts">
import {ref} from 'vue'
import Switch from '../../lib/Switch.vue'
import Switch2Demo from '../../components/Switch/SwitchBgcolor.vue'
export default {
  components:{Switch},
  setup(){
    console.log(Switch2Demo);
    
    
    const bool = ref(false)
    return {
      bool
    }
  }
};
</script>
