<demo>
禁用状态
</demo>
<template>
  <ht-checkbox v-model="checked1" disabled>Disabled</ht-checkbox>
  <ht-checkbox v-model="checked2">Not disabled</ht-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
</script>
