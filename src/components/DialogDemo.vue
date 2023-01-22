<template>
  <ht-dialog title="标题" :visible="visible" @update:visible="visible = $event">
    <span>This is message</span>
    <template #footer>
      <ht-button @click="visible=false">Cancel</ht-button>
      <ht-button @click="visible=false" type="primary">Ok</ht-button>
    </template>
  </ht-dialog>
  <ht-button @click="visible = true">toggle</ht-button>

  <h2>示例2:使用Hook打开dialog</h2>
  <ht-button @click="showDialog">showDialog</ht-button>
</template>

<script lang="ts">
import htDialog from "../lib/Dialog.vue";
import htButton from "../lib/Button.vue";
import {openDialog} from '../lib/openDialog'
import { ref } from "vue";
export default {
  components: { htDialog, htButton },
  setup() {
    const visible = ref(false);
    const showDialog = ()=>{
      openDialog({title:'标题',content:'你好'})
    }
    return { visible,showDialog };
  },
};
</script>

<style>
</style>