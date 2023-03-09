<demo>
基础用法
</demo>
<template>
  <div>
    <ht-checkbox v-model="checked1" label="Option 1" size="large" />
    <ht-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <ht-checkbox v-model="checked3" label="Option 1" />
    <ht-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <ht-checkbox v-model="checked5" label="Option 1" size="small" />
    <ht-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <ht-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <ht-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>
