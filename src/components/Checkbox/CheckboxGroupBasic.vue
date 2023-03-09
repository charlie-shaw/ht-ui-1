<demo>
多选框组
</demo>
<template>
  <ht-checkbox-group v-model="checkList">
    <ht-checkbox label="Option A" />
    <ht-checkbox label="Option B" />
    <ht-checkbox label="Option C" />
    <ht-checkbox label="disabled" disabled />
    <ht-checkbox label="selected and disabled" disabled />
  </ht-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
