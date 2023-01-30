<template>
  <Teleport :to="appendTo">
    <Transition name="ht-message">
      <div
        ref="message"
        v-if="visible"
        class="ht-message"
        :style="[
          { zIndex },
          { '--ht-message-offset': offset + 'px' },
          { '--ht-message-offsetTop': offsetTop + 'px' },
        ]"
        :class="[classes]"
        :id="id"
      >
        {{ message }}
        <svg class="icon close" v-if="showClose" aria-hidden="true" @click="close">
          <use xlink:href="#icon-close"></use>
        </svg>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { computed, ref, onMounted, watch,render } from "vue";
export default {
  props: {
    // 距离顶部的偏移量
    offset: { type: Number, default: 20 },
    offsetTop: { type: Number },
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
    id: String,
  },
  setup(props, ctx) {
    let timer;
    // 切换的状态
    const visible = ref(false);
    const message_unknow = ref(props.message)
    const classes = computed(() => {
      return {
        [`ht-message--${props.type}`]: props.type,
      };
    });
    const close = () => {
      timer = null
      props.close?.();
      visible.value = false;
    };
    const Timer = () => {
      // duration为0时，不自动关闭
      if(props.duration<=0) return
      timer = setTimeout(() => {
        close();
      }, props.duration);
    };
    onMounted(() => {
      visible.value = true;
      Timer();
    });

    // watch(()=>message_unknow.value,(newVal,oldVal)=>{
    //   console.log(123);
      
    // },{immediate:true})


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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 19px !important;
  border-radius: 8px;
  background-color: #f0f9eb;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.25s;
  top: var(--ht-message-offsetTop);
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
  >.close{
    fill: black;
    margin-left: 15px;
    cursor: pointer;
  }
}
.ht-message-enter-from {
  opacity: 0;
  top: calc(var(--ht-message-offsetTop) - var(--ht-message-offset));
}
.ht-message-enter-to {
  opacity: 1;
  top: var(--ht-message-offsetTop);
}
.ht-message-enter-active {
  // transition: all 0.25s;
}
.ht-message-leave-from {
  opacity: 1;
  top: var(--ht-message-offsetTop);
}
.ht-message-leave-to {
  opacity: 0;
  top: 0px;
}
.ht-message-leave-active {
  // transition: all 0.25s;
}
</style>