<demo>
 可选项目数量的限制
</demo>
<template>
  <ht-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <ht-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</ht-checkbox>
  </ht-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>
