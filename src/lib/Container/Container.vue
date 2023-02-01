<template>
  <section
    class="ht-container"
    :class="[{ 'is-vertical':  isVertical }]"
    ref="container"
  >
    <slot></slot>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
const props = defineProps({
  direction: { type: String },
});
let isVertical = ref(null);
const container = ref();
onMounted(() => {
  props.direction
    ? props.direction === "vertical"
      ? (isVertical.value = true)
      : (isVertical.value = false)
    : (isVertical.value = Getdirection());
});
const Getdirection = () => {
  return [...container.value.children].some((el) => {
    return (
      el.className.includes("ht-header") || el.className.includes("ht-footer")
    );
  });
};
</script>

<style lang="scss" >
.ht-container {
  display: flex;
  flex-grow: 1;
  &.is-vertical {
    flex-direction: column;
  }
}
</style>