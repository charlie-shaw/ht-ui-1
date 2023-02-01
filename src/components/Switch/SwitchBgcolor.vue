<demo>
    开关背景颜色
</demo>
<template>
  <h2>开关背景颜色</h2>
  <ht-switch
    v-model="value1"
    active-color="#FFC0CB"
    inactive-color="#ADD8E6"
  ></ht-switch>
  <ht-switch
    v-model="value2"
    style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
  ></ht-switch>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref(true);
</script>