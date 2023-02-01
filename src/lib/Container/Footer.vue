<template>
<footer class="ht-footer" :style="[style]">
    <slot></slot>
</footer>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    height:{type:String,default:''}
})
const style = computed(()=>{
    return props.height?{'--ht-footer-height':props.height}:{}
})
</script>

<style lang="scss" >
.ht-footer{
    --ht-footer-height:60px;
    --ht-footer-padding:0 20px;
    padding: var(--ht-footer-padding);
    height: var(--ht-footer-height);
    flex-shrink: 0;
    background-color: var(--ht-color-primary-light-1);
}
</style>