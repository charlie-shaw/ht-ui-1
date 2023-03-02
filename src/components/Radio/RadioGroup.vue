<demo>
单选框组
</demo>
<template>
  <ht-radio-group v-model="radio">
    <ht-radio :label="3">Option A</ht-radio>
    <ht-radio :label="6">Option B</ht-radio>
    <ht-radio :label="9">Option C</ht-radio>
  </ht-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
