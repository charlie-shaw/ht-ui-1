<demo>
带有边框
</demo>
<template>
  <div>
    <ht-checkbox v-model="checked1" label="Option1" size="large" border />
    <ht-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <ht-checkbox v-model="checked3" label="Option1" border />
    <ht-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <ht-checkbox-group v-model="checkboxGroup1" size="small">
      <ht-checkbox label="Option1" border />
      <ht-checkbox label="Option2" border />
    </ht-checkbox-group>
  </div>
  <div class="mt-4">
    <ht-checkbox-group v-model="checkboxGroup1" size="small">
      <ht-checkbox label="Option1" border disabled />
      <ht-checkbox label="Option2" border disabled />
    </ht-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Option1'])
</script>
<style scoped>
.mt-4{
  margin-top: 20px;
}
</style>
