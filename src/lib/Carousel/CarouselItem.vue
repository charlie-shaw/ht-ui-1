<template>
  <div
    ref="carouselitem"
    class="ht-carousel__item"
    @click="skip($event)"
    :class="[
      {
        'is-active': props.index === cindex,
      },
      classes,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import type { WritableComputedRef, PropType } from "vue";
import useGetElPositon from "../hooks/useGetElPosition";
type directionType = "horizontal" | "vertical";
const props = defineProps({
  index: { type: Number, default: 0 },
  isCard: { type: Boolean, default: false },
  skip: { type: Function, default: () => {} },
  direction: { type: String },
});

const classes = computed(() => {
  return {
    ["ht-carousel__item--card"]: props.isCard,
    [`ht-carousel--${props.direction}`]: true,
  };
});
const carouselitem = ref(null);
// 选中页
const cindex = inject<WritableComputedRef<number>>("initialIndex");

let positionSize = ref(null);
let initTranslateX = ref(null);
let initTranslateY = ref(null);
// 获取每个Item的translateX值
let translateX = computed(() => {
  return (
    (props.index - cindex.value) * positionSize.value +
    initTranslateX.value +
    "px"
  );
});

let translateY = computed(() => {
  return (
    (props.index - cindex.value) * positionSize.value +
    initTranslateY.value +
    "px"
  );
});
onMounted(() => {
  const { width, height } = useGetElPositon(carouselitem.value);
  props.direction === "vertical" &&
    (positionSize.value = height) &&
    props.isCard &&
    (initTranslateY.value = height / 2);

  props.direction !== "vertical" &&
    (positionSize.value = width) &&
    props.isCard &&
    // 如果是卡片模式，初始化translateX的值，让active页居中
    (initTranslateX.value = width / 2);
});
const skip = (event) => {
  if (!props.isCard) return;
  cindex.value = props.index;
};

const name = "Ht-Carouse-Item";
</script>

<style lang="scss" scoped>
.ht-carousel__item {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in-out;

  z-index: 98;
  &.ht-carousel--vertical {
    width: 100%;
    transform: translateY(v-bind("translateY"));
    &.ht-carousel__item--card {
      height: 50%;
      transform: scale(0.83) translateY(v-bind("translateY"));
    }
    &.is-active {
      transform: scale(1) translateY(v-bind("translateY"));
    }
  }
  &.ht-carousel--horizontal {
    transform: translateX(v-bind("translateX"));
    &.ht-carousel__item--card {
      transform: scale(0.83) translateX(v-bind("translateX"));
    }
    &.is-active {
      transform: scale(1) translateX(v-bind("translateX"));
    }
  }
}
/* 卡片样式 */
.ht-carousel__item--card {
  width: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  }
  &.is-active {
    z-index: 99;
  }
}
</style>