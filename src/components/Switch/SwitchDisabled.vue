<demo>
  禁用状态
</demo>
<template>
    <ht-switch
      v-model="value1"
      :disabled="true"
    ></ht-switch>
    <ht-switch
      v-model="value2"
    ></ht-switch>
  </template>
    
    <script lang="ts">
  import { ref } from "vue";
  export default {
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      return { value1,value2 };
    },
  };
  </script>
    
    <style>
  </style>