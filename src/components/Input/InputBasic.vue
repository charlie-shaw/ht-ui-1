<demo>
基础用法
</demo>
<template>
  <ht-input v-model="input"  placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>