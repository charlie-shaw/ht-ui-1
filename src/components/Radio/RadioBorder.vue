<demo>
带有边框
</demo>
<template>
  <div>
    <ht-radio-group v-model="radio1">
      <ht-radio label="1" size="large" border>Option A</ht-radio>
      <ht-radio label="2" size="large" border>Option B</ht-radio>
    </ht-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ht-radio-group v-model="radio2">
      <ht-radio label="1" border>Option A</ht-radio>
      <ht-radio label="2" border>Option B</ht-radio>
    </ht-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ht-radio-group v-model="radio3" size="small">
      <ht-radio label="1" border>Option A</ht-radio>
      <ht-radio label="2" border disabled>Option B</ht-radio>
    </ht-radio-group>
  </div>
  <div style="margin-top: 20px">
    <ht-radio-group v-model="radio4" size="small" disabled>
      <ht-radio label="1" border>Option A</ht-radio>
      <ht-radio label="2" border>Option B</ht-radio>
    </ht-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
