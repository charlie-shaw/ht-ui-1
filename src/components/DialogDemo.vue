<template>
  <ht-dialog title="标题" :visible="visible" 
  @update:visible="visible = $event" 
  :before-close="before" 
  @close="fn" 
  @open="open"
  @opend="opend"
  >
    <span>This is message</span>
    <template #footer>
      <ht-button @click="visible=false">Cancel</ht-button>
      <ht-button @click="visible=false" type="primary">Ok</ht-button>
    </template>
  </ht-dialog>
  <ht-button @click="visible = true">toggle</ht-button>

</template>

<script lang="ts">
import htDialog from "../lib/Dialog.vue";
import htButton from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { htDialog, htButton },
  setup() {
    const visible = ref(false);
    const before =(done)=>{
      done()
    }
    const fn =()=>{
      console.log('关闭了');
      
    }
    const open=()=>{
      console.log('打开了');
      
    }
    const opend=()=>{
      console.log('打开动画结束回调');
    }
    return { visible ,before,fn,open,opend};
  },
};
</script>

<style>
</style>