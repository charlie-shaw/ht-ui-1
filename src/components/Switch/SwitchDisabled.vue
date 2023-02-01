<demo>
  禁用状态
</demo>
<template>
  <ht-switch v-model="value1" :disabled="true"></ht-switch>
  <ht-switch v-model="value2"></ht-switch>
</template>
    
<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref(true);

</script>