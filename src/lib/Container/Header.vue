<template>
  <header class="ht-header" :style="[style]">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
const props = defineProps({
  height:{type:String,default:null}
})

const style=computed(()=>{
  return props.height? {'--ht-header-height':`${props.height}`}:{}
})
</script>
<style lang="scss" >
.ht-header{
--ht-header-height:60px;
height: var(--ht-header-height);
background-color: var(--ht-color-primary-light-1);
}
</style>