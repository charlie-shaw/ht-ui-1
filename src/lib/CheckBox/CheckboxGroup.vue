<template>
    <div class="ht-checkbox-group" :id="`ht-id-`+componentId">
        <slot/>
    </div>
</template>

<script setup>
import useComponentId from "../../hooks/useComponentId";
import { computed, provide, ref, useSlots } from "vue";
const componentId = useComponentId()
const props = defineProps({
    modelValue:{type:Array,default:[]},
    min:{type:[Number,String]},
    max:{type:[Number,String]},
    disabled:{type:Boolean,default:false}
})
const emits = defineEmits(["update:modelValue","change"])
const modelValue = computed({
    get(){
        return props.modelValue
    }
})

// 内部默认插槽中的checkbox
const checkboxs = computed(()=>{
    return useSlots().default().filter((item)=>{
        return item.type["__name"] === "Checkbox"
    })
})

provide('checkboxGroupContentKey',{
    modelValue,
    min:ref(props.min),
    max:ref(props.max),
    disabled:props.disabled
})


</script>

<style lang="scss" scoped>

</style>