<demo>
    Dialog，弹出一个对话框
</demo>
<template>
    <ht-dialog title="标题" :visible="visible" 
    @update:visible="visible = $event" 
    :before-close="before" 
    @close="fn" 
    @open="open"
    @opend="opend"
    @closed="closed"
    :close-on-click-modal="true"
    custom-class="my-dialog"
    >
      <span>This is message</span>
      <template #footer>
        <ht-button @click="visible=false">Cancel</ht-button>
        <ht-button @click="visible=false" type="primary">Ok</ht-button>
      </template>
    </ht-dialog>
    <ht-button @click="visible = true">toggle</ht-button>
  
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
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
      const closed=()=>{
        console.log('关闭动画结束后的回调');
      }
  </script>