<template>
<div class="ht-radio-group">
  <slot></slot>
</div>
</template>

<script setup>
const componentName="HtRadioGroup"

import {   useSlots,getCurrentInstance, ref, watch, useAttrs, provide } from "vue";
// 获取全局一个递增的id
import useComponentId from '../hooks/useComponentId'
const props = defineProps({
  modelValue : { type: [String, Number, Boolean],default:undefined },
  name:{type:String},
  size:{type:String,default:"large"},
  disabled:{type:Boolean,default:false}
});
const slots = useSlots().default();
const RadioNameId =props.name || `ht-id-${useComponentId()}`
provide('RadioNameId',RadioNameId)
const emits = defineEmits(['update:modelValue',"change"])
// const value = ref(props.modelValue);
// watch(value,(val)=>{
//   console.log(123);
//   emits("update:modelValue",val)
// })
</script>

<style lang="scss">
.ht-radio-group{
  display: inline-flex;
  align-items: center;
}
</style>