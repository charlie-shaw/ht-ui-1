<template>
    <div class="ht-tooltip-container" :style="[{'z-index':ZIndex}]">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useComponentZIndex from "../hooks/useComponentZIndex";
const ZIndex = ref(useComponentZIndex())

</script>

<style lang="scss">
.ht-tooltip-container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
}
</style>