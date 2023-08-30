<template>
  <div
    class="ht-carousel"
    :class="[classes]"
    @mouseenter="pausePlay"
    @mouseleave="startPlay"
  >
    <div class="ht-carousel__container" :style="[{ height: height }]">
      <component
        :isCard="props.type === 'card'"
        :direction="props.direction"
        :index="index"
        :is="i"
        v-for="(i, index) in CarouselItems"
        :key="i.key"
        :skip="setActiveItem"
      ></component>
    </div>
    <button
      v-if="props.direction === 'horizontal'"
      class="ht-carousel__arrow ht-carousel__arrow--left"
      @click="prev"
    >
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
        ></path>
      </svg>
    </button>
    <button
      v-if="props.direction === 'horizontal'"
      class="ht-carousel__arrow ht-carousel__arrow--right"
      @click="next"
    >
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
        ></path>
      </svg>
    </button>
    <ul
      class="ht-carousel__indicators"
      :class="[
        {
          [`ht-carousel__indicator--${props.direction}`]: true,
        },
      ]"
    >
      <li
        class="ht-carousel__indicator"
        :class="{ isActive: item === initialIndex + 1 }"
        v-for="item in CarouselItems.length"
        :key="item"
        @mouseenter="setActiveItem($event, item - 1)"
        @click="setActiveItem($event, item - 1)"
      >
        <button class="ht-carousel__button"></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  useSlots,
  provide,
  computed,
  h,
  ref,
  defineEmits,
  onMounted,
} from "vue";
import type { PropType } from "vue";
import { GetSlotsByName } from "../../utils";
type directionType = "horizontal" | "vertical";
const emits = defineEmits(["update:initialIndex", "change"]);
const props = defineProps({
  height: { type: String },
  initialIndex: { type: Number, default: 0 },
  trigger: { type: String, default: "hover" },
  loop: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 3000 },
  type: { type: String },
  direction: { type: String, default: "horizontal" },
});
const classes = computed(() => {
  return {
    ["ht-carousel--card"]: props.type === "card",
    [`ht-carousel--${props.direction}`]: true,
  };
});

// 当前选中的值
const initialIndex = computed({
  get: () => props.initialIndex,
  set: (value) => {
    let index = value;

    if (props.loop) {
      value < 0
        ? (index = CarouselItems.length - 1)
        : value > CarouselItems.length - 1
        ? (index = 0)
        : index;
    } else {
      value < 0
        ? (index = 0)
        : value > CarouselItems.length - 1
        ? (index = CarouselItems.length - 1)
        : index;
    }
    if (index !== initialIndex.value) {
      const oldIndex = props.initialIndex;
      emits("update:initialIndex", index);
      emits("change", index, oldIndex);
    }
  },
});
// 定义默认选中的索引值
const Iindex = provide("initialIndex", initialIndex);

const slots = useSlots().default();
// 获取插槽内的CarouselItem组件
const CarouselItems = GetSlotsByName("CarouselItem", slots);

// 上一页
const prev = () => {
  initialIndex.value--;
};
// 下一页
const next = () => {
  initialIndex.value++;
};
// 自定义按照页码跳转
const setActiveItem = (event, index) => {
  const type = event.type && event.type === "mouseenter" ? "hover" : "click";
  if (props.trigger !== type) return;

  initialIndex.value = index;
};
// 自动播放定时器
let timer = null;
const startPlay = () => {
  if (!props.autoplay) return;
  timer = setInterval(next, props.interval);
};

const pausePlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};
onMounted(() => {
  if (!props.autoplay) return;
  timer = setInterval(next, props.interval);
});
defineExpose({ prev, next, setActiveItem });
</script>

<style lang="scss" scoped>
.ht-carousel {
  position: relative;
  & > .ht-carousel__container {
    position: relative;
    overflow: hidden;
  }
}

.ht-carousel__arrow {
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  padding: 0;
  border-radius: 50%;
  background-color: rgba(31, 45, 61, 0.11);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(31, 45, 61, 0.23);
  }
  svg {
    width: 16px;
    height: 16px;
  }
}
.ht-carousel__arrow--left {
  left: 10px;
}
.ht-carousel__arrow--right {
  right: 10px;
}

// 页码样式
.ht-carousel__indicators {
  li {
    list-style: none;
  }
  z-index: 999;
  position: absolute;

  .ht-carousel__button {
    border: none;

    opacity: 0.48;
    background-color: #fff;
  }
  .ht-carousel__indicator,
  .ht-carousel__button {
    cursor: pointer;
  }
  /* 水平状态的样式 */
  &.ht-carousel__indicator--horizontal {
    display: flex;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    .ht-carousel__indicator {
      background-color: transparent;
      margin-left: 10px;

      .ht-carousel__button {
        width: 30px;
        height: 2px;
      }
      &.isActive {
        .ht-carousel__button {
          opacity: 1;
        }
      }
    }
  }

  /* 垂直状态的样式 */

  &.ht-carousel__indicator--vertical {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    .ht-carousel__indicator {
      background-color: transparent;
      margin-top: 10px;
      .ht-carousel__button {
        width: 2px;
        height: 30px;
      }
      &.isActive {
        .ht-carousel__button {
          opacity: 1;
        }
      }
    }
  }
}
</style>