<demo>
禁用状态
</demo>
<template>
  <ht-radio v-model="radio" disabled label="disabled">Option A</ht-radio>
  <ht-radio v-model="radio" disabled label="selected and disabled"
    >Option B</ht-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
