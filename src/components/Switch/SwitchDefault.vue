<demo>
  基本用法
</demo>
<template>
  <ht-switch v-model="value1"></ht-switch>
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

<style>
</style>