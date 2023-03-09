<demo>
中间状态
</demo>
<template>
  <ht-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</ht-checkbox
  >
  <ht-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <ht-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</ht-checkbox>
  </ht-checkbox-group>
</template>


<script lang="ts" setup>
import {ref} from 'vue'
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 &&  cities.length > checkedCount  
}
</script>
