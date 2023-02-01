<template>
<aside :style="[style]" class="ht-aside">
    <slot></slot>
</aside>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    width:{type:String,default:''}
})
const style = computed(()=>{
    return props.width?{'--ht-aside-width':`${props.width}`}:{}
})

</script>

<style lang="scss" scoped>
.ht-aside{
    --ht-aside-width:300px
    overflow: auto;
    flex-shrink: 0;
    width: var(--ht-aside-width);
    flex-direction: column;
    background-color: var(--ht-color-primary-light-2);
}

</style>