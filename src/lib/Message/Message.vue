<template>
  <Teleport :to="appendTo">
    <Transition name="ht-message">
      <div
        v-if="visible"
        class="ht-message"
        :style="[
          //   { top: offset + 'px' },
          { zIndex },
          { '--ht-message-offset': offset + 'px' },
        ]"
        :class="[classes]"
      >
        {{ message }}
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
export default {
  props: {
    // 距离顶部的偏移量
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 2000 },
    type: { type: String, default: "info" },
    message: { type: [String, Object] },
    // 显示时间
    duration: { type: Number, default: 3000 },
    // 是否显示关闭按钮
    showClose: { type: Boolean, default: false },
    // 组件追加到的位置
    appendTo: { type: [String, HTMLElement], default: document.body },
    // 关闭的回调
    close: { type: Function },
  },
  setup(props, ctx) {
    const classes = computed(() => {
      return {
        [`ht-message--${props.type}`]: props.type,
      };
    });
    const visible = ref(true);
    const close = () => {
      props.close?.();
      visible.value = false;
    };
    const Timer = () => {
      setTimeout(() => {
        close();
      }, props.duration);
    };
    onMounted(() => {
      Timer();
    });
    return {
      classes,
      visible,
      close,
    };
  },
};
</script>

<style lang="scss">
.ht-message {
  padding: 15px 19px !important;
  border-radius: 8px;
  background-color: #f0f9eb;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: var(--ht-message-offset);
  &.ht-message--success {
    background-color: var(--ht-message-success-bgcolor);
    color: var(--ht-message-success-color);
  }
  &.ht-message--info {
    background-color: var(--ht-message-info-bgcolor);
    color: var(--ht-message-info-color);
  }
  &.ht-message--warning {
    background-color: var(--ht-message-warning-bgcolor);
    color: var(--ht-message-warning-color);
  }
  &.ht-message--error {
    background-color: var(--ht-message-error-bgcolor);
    color: var(--ht-message-error-color);
  }
}
.ht-message-enter-from {
  opacity: 0;
  top: 0px;
}
.ht-message-enter-to {
  opacity: 1;
  top: var(--ht-message-offset);
}
.ht-message-enter-active {
  transition: all 0.25s;
}
.ht-message-leave-from {
  opacity: 1;
  top: var(--ht-message-offset);
}
.ht-message-leave-to {
  opacity: 0;
  top: 0px;
}
.ht-message-leave-active {
  transition: all 0.25s;
}
</style>