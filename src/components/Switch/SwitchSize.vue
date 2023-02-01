<demo>
  尺寸
</demo>
<template>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="large"
  ></ht-switch>
  <br />

  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
  ></ht-switch>
  <br />

  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="small"
  ></ht-switch>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref(true);
</script>