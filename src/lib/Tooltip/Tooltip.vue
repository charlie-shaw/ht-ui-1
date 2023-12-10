<template>
  <component :is="comVnode" v-is-element="fn"> </component>
  <Teleport to="body">
    <ht-tipcontainer>
      <Transition name="fade">
        <div
          v-show="visible"
          class="ht-popover-arrow"
          ref="arrow"
          :class="[classes]"
          :style="{ top: PoperTop, left: PoperLeft }"
        >
          <div
            class="ht-poper"
            :class="[classes]"
            :style="{ bottom: ToolTipBottom }"
            ref="poper"
            @mouseenter="visible = true"
            @mouseleave="visible = false"
          >
            {{ content }}
          </div>
        </div>
      </Transition>
    </ht-tipcontainer>
  </Teleport>
</template>

<script lang="ts" setup>
import {
  computed,
  onMounted,
  useSlots,
  nextTick,
  render,
  ref,
  toRefs,
  provide,
  h,
  watch,
} from "vue";
import useGetElPosition from "../hooks/useGetElPosition";

const visible = ref(false);
provide("tooltipVisible", visible);
interface Props {
  content?: string;
  placement?: string;
  disabled?: boolean;
  effect?: string;
  offset?: number;
}

const props = withDefaults(defineProps<Props>(), {
  content: "",
  placement: "top",
  disabled: false,
  effect: "dark",
  offset: 12,
});
const placement = computed(() => {
  return props.placement;
});
const classes = computed(() => {
  return {
    [`is-${props.effect}`]: true,
    [`${placement.value}-arrow ${placement.value}`]: true,
  };
});

const slotDefaut = useSlots().default()[0];

const comVnode = h(slotDefaut, {
  "onUpdate:tooltip": (val) => {
    visible.value = val;
  },
});

const poper = ref<HTMLElement>(null);
// 箭头尺寸
const arrow = ref<HTMLElement>(null);
const PoperLeft = ref("unset");
const PoperRight = ref("unset");
const PoperBottom = ref("unset");
const PoperTop = ref<string | number>("unset");
const DomPosition = ref(null);
const ToolTipWidth = ref(null);
const ToolTipHeight = ref(null);
const ToolTipBottom = ref(null);
const ToolTipLeft = ref(null);
const fn = (position) => {
  DomPosition.value = position;
};
const setPosition = (position: any, size: any) => {
  const _placement = placement.value;
  if (_placement.includes("top")) {
    PoperTop.value = position.value.top - props.offset + "px";
    PoperLeft.value =
      position.value.left + DomPosition.value.width / 2 - 8 + "px";
    ToolTipBottom.value = `8px`;
  } else if (_placement.includes("bottom")) {
    PoperTop.value = position.value.top + ToolTipHeight.value + "px";
    PoperLeft.value =
      position.value.left + DomPosition.value.width / 2 - 8 + "px";
    ToolTipBottom.value = -ToolTipHeight.value - 8 + "px";
  }
};
onMounted(() => {
  watch(visible, () => {
    const { height, width } = useGetElPosition(poper.value);
    ToolTipWidth.value = width; // for the animation only.
    ToolTipHeight.value = height || 36; // for the animation only.
    setPosition(DomPosition as any, { width, height } as any);
  });
});
</script>

<style lang="scss" >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.ht-poper {
  position: absolute;
  min-width: 10px;
  line-height: 20px;
  border-radius: 3px;
  padding: 8px 14px !important;
  left: -21px;
  white-space: nowrap;
  &.is-dark {
    background-color: rgba(38, 38, 38, 1);
    color: white;
  }
}
.ht-popover-arrow {
  $arrow-size: 8px;
  $arrow-offset: $arrow-size / 2;
  position: absolute;
  width: 0;
  height: 0;
  border: $arrow-size solid rgba(38, 38, 38, 1);
  &.top {
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom: none;
  }
  &.bottom {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top: none;
  }
}
</style>