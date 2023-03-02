<demo>
基础用法
</demo>
<template>
  <div >
    <ht-radio-group v-model="radio1" >
      <ht-radio label="1" size="large">Option 1</ht-radio>
      <ht-radio label="2" size="large">Option 2</ht-radio>
    </ht-radio-group>
  </div>
  <div >
    <ht-radio-group v-model="radio2" >
      <ht-radio label="1">Option 1</ht-radio>
      <ht-radio label="2">Option 2</ht-radio>
    </ht-radio-group>
  </div>
  <div>
    <ht-radio-group v-model="radio3" >
      <ht-radio label="1" size="small">Option 1</ht-radio>
      <ht-radio label="2" size="small">Option 2</ht-radio>
    </ht-radio-group>
  </div>
  <div >
    <ht-radio-group v-model="radio3" disabled >
      <ht-radio label="1" size="small">Option 1</ht-radio>
      <ht-radio label="2" size="small">Option 2</ht-radio>
    </ht-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
