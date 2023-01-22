<template>
  <div class="ht-switch" @click.stop="toggle" :class="[SwitchClass]">
    <span class="ht-switch--left" :class="[{ 'is-active': !modelValue }]">{{
      inactiveText
    }}</span>
    <button
      :disabled="disabled"
      :style="[
        { '--switch-on-color': activeColor },
        { '--switch-off-color': inactiveColor },
        // @ts-ignore
        Stylecss,
        {width:width}
      ]"
    >
      <span class="ht-switch__action"></span>
    </button>
    <span class="ht-switch--right" :class="[{ 'is-active': modelValue }]">{{
      activeText
    }}</span>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
export default {
  props: {
    modelValue: Boolean,
    disabled: { type: Boolean, default: false },
    activeColor: { type: String, default: "#409EFF" },
    inactiveColor: { type: String, default: "#DCDFE6" },
    style: { type: Object },
    activeText: { type: String },
    inactiveText: { type: String },
    size: { type: String },
    width:{type:String,default:'20px'}
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const SwitchActive = ref(null);
    const SwitchClass = computed(() => {
      const size = props.size;
      return {
        "is-checked": props.modelValue,
        "is-disabled": props.disabled,
        [`ht-switch--${size}`]: size,
      };
    });
    const Stylecss = computed(() => {
      return props.style;
    });
    const toggle = () => {
      context.emit("update:modelValue", !props.modelValue);
    };
    return { toggle, SwitchClass, Stylecss };
  },
};
</script>

<style lang="scss">
@import "./ht.scss";
$h: 22px;
$h2: $h - 4px;
.ht-switch {
  &.is-checked {
    button {
      background: var(--switch-on-color);
      .ht-switch__action {
        left: calc(100% - #{$h2} - 2px);
      }
    }
  }
  .ht-switch--right {
    transition: all 0.25s;
    &.is-active {
      color: var(--ht-color-primary);
    }
    margin-left: 10px;
  }
  .ht-switch--left {
    transition: all 0.25s;
    &.is-active {
      color: var(--ht-color-primary);
    }
    margin-right: 10px;
  }
  &:disabled::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: $h/2;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: not-allowed;
  }
  > button {
    height: $h;
    width: $h * 2;
    min-width: 40px;
    border: none;
    background: var(--switch-off-color);
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    > .ht-switch__action {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 0.3s;
    }
  }
  font-size: 14px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  &.ht-switch--large {
    font-size: 14px;
    line-height: 24px;
    height: 40px;
    button {
      height: 24px;
      border-radius: 12px;
      min-width: 50px;
      .ht-switch__action {
        width: 20px;
        height: 20px;
      }
    }
    &.is-checked .ht-switch__action {
      left: calc(100% - 20px - 2px);
    }
  }
  &.ht-switch--small {
    font-size: 12px;
    line-height: 16px;
    height: 24px;
    button {
      min-width: 30px;
      height: 16px;
      border-radius: 8px;
      .ht-switch__action {
        width: 12px;
        height: 12px;
      }
    }
    &.is-checked .ht-switch__action {
      left: calc(100% - 12px - 2px);
    }
  }
}
</style>