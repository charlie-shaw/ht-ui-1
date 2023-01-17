<template>
  <button
    :class="{ checked: value }"
    @click="toggle"
    :disabled="disabled"
    :style="{
      '--switch-on-color': active_color,
      '--switch-off-color': inactive_color,
    }"
  >
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    active_color: {
      type: String,
      default: "#409Eff",
    },
    inactive_color: {
      type: String,
      default: "rgb(255, 73, 73)",
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: var(--switch-off-color);
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 0.3s;
  }
  &.checked {
    background: var(--switch-on-color);
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
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
}
</style>