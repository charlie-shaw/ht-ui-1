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
</script>

<style lang="scss" scoped>
</style>