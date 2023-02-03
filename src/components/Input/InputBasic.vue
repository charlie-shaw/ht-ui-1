<demo>
    input输入框
</demo>
<template>
  <ht-input 
  type="text" 
  v-model="first" 
  placeholder="Please input"
  maxlength="5"
  :show-word-limit="true"
  :show-password="false"
  :clearable="true"
  @focus="fn"
  ></ht-input>
  <ht-input 
  type="text" 
  v-model="first" 
  placeholder="Please input"
  maxlength="5"
  :show-word-limit="true"
  :disabled="true"
  
  ></ht-input>
</template>

<script setup lang="ts">
import { ref } from "vue";
const first = ref("");
const fn = ()=>{
  console.log('获取焦点');
  
}
</script>

<style lang="scss" scoped>
</style>