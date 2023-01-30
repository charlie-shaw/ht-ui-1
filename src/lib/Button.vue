<template>
  <button
    class="ht-button"
    :class="[{ round: round }, { 'ht-loading': loading }, classes]"
    :disabled="disabled"
    :style="{
      '--ht-button-text-color': color,
      '--ht-button-bg-color': bg,
    }"
  >
    <i class="is-loading" v-if="loading">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
        ></path>
      </svg>
    </i>
    <slot />
  </button>
</template>

<script lang="ts">
import { ref, computed } from "vue";
export default {
  // 取消继承属性
  //   inheritAttrs: false,
  props: {
    // 默认普通按钮，支持button/link/text
    theme: { type: String, default: "button" },
    // 按钮类型，支持default/primary/danger/warning
    type: { type: String, default: "default" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    // 按钮尺寸,支持large/default/small
    size: { type: String, default: "default" },
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
        const type = val.type;
        if (val.theme === "link") {
          return "transparent";
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
    round: { type: Boolean, default: false },
  },
  setup(props, context) {
    // @ts-ignore
    const { theme, type, size } = props;
    const classes = computed(() => {
      return {
        [`theme-${theme}--${type}`]: theme,
        [`ht-button--${size}`]: size,
      };
    });
    return { size, classes };
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
  + .ht-button {
    margin-left: 10px;
  }
  &[class*="theme-link"] {
    background-color: var(--ht-button-bg-color);
    &:hover {
      opacity: 0.5;
    }
    &:disabled:hover {
      opacity: 1;
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
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
  &.round {
    border-radius: 999px;
  }
  &.ht-loading {
    display: flex;
    align-items: center;
    opacity: 0.5;
    cursor: default;
    > .is-loading {
      width: 1em;
      height: 1em;
      display: inline-block;
      animation: loading 2s linear infinite;
    }
    &:hover {
      opacity: 0.5;
    }
    @keyframes loading {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
  }
  &.ht-button--default {
    padding: 8px 15px;
  }
  &.ht-button--large {
    padding: 12px 19px;
  }
  &.ht-button--small {
    font-size: 12px;
    padding: 5px 11px;
  }
}
</style>