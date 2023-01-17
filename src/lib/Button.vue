<template>
  <!-- 使用$attrs，可以让元素获取所有继承的属性 -->
  <!-- <button v-bind="$attrs"> -->
  <!-- <button v-bind="rest"> -->
  <button
    class="ht-button"
    :class="[button_class, { round: round }]"
    :disabled="disabled"
    :style="{
      '--ht-button-text-color': color,
      '--ht-button-bg-color': bg,
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  // 取消继承属性
  //   inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default(val) {
        const type = val.type;
        const theme = val.theme;
        // "white"
        if (theme !== "link" && type !== "default" && theme !== "text")
          return "white";
        if (type === "primary") {
          return "#409EFF";
        } else if (type === "success") {
          return "#67C23A";
        } else if (type === "danger") {
          return "#F56C6C";
        } else if (type === "warning") {
          return "#E6A23C";
        } else if (type === "default") {
          return "#606266";
        } else {
          return "#606266";
        }
      },
    },
    bg: {
      type: String,
      default(val) {
        // console.log(val.theme);

        const type = val.type;
        if (val.theme === "link") {
          return "rgba(0,0,0,0)";
        } else if (val.theme === "text") {
          return "unset";
        } else if (type === "primary") {
          return "#409EFF";
        } else if (type === "success") {
          return "#67C23A";
        } else if (type === "danger") {
          return "#F56C6C";
        } else if (type === "warning") {
          return "#E6A23C";
        } else {
          return "409EFF";
        }
      },
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    // 获取所有继承的属性
    const attrs = context.attrs;
    const { size, ...rest } = attrs;
    const button_class = ref(`theme-${props.theme}--${props.type}`);

    return { size, rest, button_class };
  },
};
</script>

<style lang="scss" scoped>
.ht-button {
  border: none;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  position: relative;
  transition: all 0.25s;
  border-radius: 6px;
  &[class*="theme-link"] {
    &:hover,
    &:disabled {
      opacity: 0.5;
    }
  }
  &[class*="theme-button"] {
    &:hover,
    &:disabled {
      opacity: 0.6;
    }
  }
  &[class*="theme-text"] {
    &:hover {
      background-color: #f5f7fa;
    }
    &:disabled {
      opacity: 0.6;
      background-color: unset;
    }
  }
  &.theme-link--primary {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-link--success {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-link--warning {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-link--danger {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-button--primary {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-button--success {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-button--warning {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-button--danger {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-button--default {
    border: 1px solid rgb(220, 223, 230);
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }

  &.theme-text--primary {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-text--default {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-text--success {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-text--warning {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &.theme-text--danger {
    color: var(--ht-button-text-color);
    background-color: var(--ht-button-bg-color);
  }
  &:disabled::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    cursor: not-allowed;
  }
  &.round {
    border-radius: 999px;
  }
}
</style>