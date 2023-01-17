<template>
  <div>
    <Switch v-model:value="boolean" 
    active_color="#13CE66"
    inactive_color="#DCDFE6"
     />
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components:{Switch},
  setup(){
    const boolean = ref(true)
    return{boolean}
  }
};
</script>
