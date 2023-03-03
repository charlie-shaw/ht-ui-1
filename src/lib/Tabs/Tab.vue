<template>
  <div class="ht-tabs" :class="classes">
    <div class="ht-tabs__header ht-tabs__nav-wrap">
      <div class="ht-tabs__nav-scroll" ref="container">
        <div
          :ref="
            (el) => {
              if (item.name === activeValue) selectItem = el;
            }
          "
          class="ht-tabs__items"
          v-for="item in labels"
          :key="item.id"
          @click="toggle($event, item,item.disabled)"
          :class="[
            { 'is-active': activeValue === item.name },
            { 'is-disabled': item.disabled },
          ]"
        >
          {{ item.label }}
        </div>
        <div
          class="ht-tabs__active-bar"
          :style="[
            { transform: `translateX(${offsetLeft}px)` },
            { width: `${tabBarWidth}px` },
          ]"
          v-if="type === 'default'"
        ></div>
      </div>
    </div>
    <div class="ht-tabs__content">
      <component
        :is="currentItem"
        :label="currentItem.props.label"
        :key="currentItem.props.name"
      ></component>
    </div>
  </div>
</template>

<script setup>
import {
  useSlots,
  computed,
  ref,
  onMounted,
  watchEffect,
  watch,
  getCurrentInstance,
  onUpdated,
} from "vue";
import { isFragment, getFragmentVnode } from "../../utils/types";
let props = defineProps({
  modelValue: { type: String },
  type: { type: String, default: "default" },
});
let emits = defineEmits(["update:modelValue", "tabClick", "tabChange"]);

let slots = useSlots().default();
// 获取插槽中的vnode
let vnodes = slots
  .filter((item) => {
    if (isFragment(item?.type?.description)) {
      return getFragmentVnode(item.children);
    } else if (typeof item.type === "object") {
      return item;
    }
  })
  .flat(Infinity);

// 获取labels
let labels = vnodes.map((item, index) => {
  let props = item.props;
  return {
    label: props["label"],
    id: index,
    name: props.name,
    disabled: props.disabled,
  };
});
// 当前选中的DOM元素
let selectItem = ref(null);
// 选中项的索引值
let activeIndex = ref(0);
// 选中时的name值
let activeValue = ref(props.modelValue || labels[0].name);
// tab-bar的偏移值
let offsetLeft = ref(20);
// tab-bar的宽度
let tabBarWidth = ref(0);
// 当前选中的组件
const currentItem = computed(() => {
  return vnodes.find((item) => {
    return item.props.name === activeValue.value;
  });
});

onMounted(() => {
  watchEffect(() => {
    const { width } = selectItem.value.getBoundingClientRect();
    // 计算选中项的width
    tabBarWidth.value = width - 40;
    // 计算tabbar的偏移值
    offsetLeft.value = selectItem.value.offsetLeft + 20;
  });
});

// 切换的方法
let toggle = ($event, val,disabled) => {
  if (val.name === activeValue.value || disabled) return;
  emits("tabClick", currentItem.value, $event);
  activeIndex.value = val.id;
  activeValue.value = val.name;
};

watch(
  () => {
    return activeValue.value;
  },
  (val) => {
    emits("update:modelValue", val);
    emits("tabChange", val);
  }
);

let classes = computed(() => {
  return [`ht-tabs--${props.type}`];
});
</script>

<style lang="scss">
.ht-tabs {
  .ht-tabs__header {
    line-height: 40px;
  }
  &.ht-tabs--default .ht-tabs__nav-wrap::after {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    background-color: var(--ht-input-disabled-border-color);
  }
  .ht-tabs__nav-wrap {
    margin-bottom: 15px;
  }
  .ht-tabs__content {
    padding: 32px;
  }
  .ht-tabs__nav-scroll {
    display: flex;
    position: relative;
    .ht-tabs__items {
      flex-grow: 1;
      text-align: center;
      // padding: 0 20px;
      cursor: pointer;
      &:hover,
      &.is-active {
        color: var(--ht-color-primary);
        transition: all 0.25s;
      }
      &.is-disabled {
        cursor: not-allowed;
        color: var(--ht-input-disabled-text-color);
      }
      &.is-active.is-disabled{
        ~.ht-tabs__active-bar{
          background-color: var(--ht-input-disabled-text-color);
        }
      }
    }
    .ht-tabs__active-bar {
      position: absolute;
      height: 2px;
      background-color: var(--ht-color-primary);
      top: 100%;
      transition: all 0.25s;
    }
  }
  .ht-tabs__nav-wrap::after {
    display: none;
  }

  // type === card样式
  &.ht-tabs--card {
    .ht-tabs__nav-scroll {
      border-bottom: 1px solid var(--ht-input-disabled-border-color);
      .ht-tabs__items {
        border: 1px solid var(--ht-input-disabled-border-color);
        border-right: none;
        border-bottom: none;
      }
      > :last-child {
        border-right: 1px solid var(--ht-input-disabled-border-color);
        border-top-right-radius: 4px;
      }
      > :first-child {
        border-top-left-radius: 4px;
      }
    }
  }

  // type === border-card样式
  &.ht-tabs--border-card {
    border: 1px solid var(--ht-input-disabled-border-color);

    .ht-tabs__nav-scroll {
      border-bottom: 1px solid var(--ht-input-disabled-border-color);
      background-color: var(--ht-fill-color-light);
      .ht-tabs__items {
        position: relative;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
      }
      .is-active {
        background-color: var(--ht-bg-color);
        border: 1px solid var(--ht-input-disabled-border-color);
        border-top: none;
        border-bottom: none;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          bottom: -1px;
          left: 0;
          height: 2px;
          background-color: var(--ht-bg-color);
        }
      }
    }
  }
}
</style>