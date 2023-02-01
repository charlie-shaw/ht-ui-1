<template>
  <Teleport to="body">
    <Transition name="ht-dialog" @afterEnter="opend" @after-leave="closed">
      <div class="ht-dialog-overlay" v-if="visible" @click="scope">
        <div class="ht-dialog-wrapper">
          <div
            ref="dialog"
            tabindex="0"
            @keyup.esc.prevent="esc"
            class="ht-dialog"
            :style="[{ width: width }, { marginTop: top }]"
            :class="customClass"
          >
            <header>
              <slot name="header">
                <span>{{ title }}</span>
              </slot>
              <button class="Close" @click="close" v-if="showClose">
                <i class="icon-close">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
                    ></path>
                  </svg>
                </i>
              </button>
            </header>
            <main>
              <slot />
            </main>
            <footer>
              <slot name="footer">
                
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
  const emit =  defineEmits(["close", "update:visible", "open", "opend","closed"])
  const props = defineProps({
    width: { type: [Number, String], default: "30%" },
    title: { type: String, default: "Tips" },
    visible: { type: Boolean, default: true },
    top: { type: String, default: "15vh" },
    beforeClose: { type: Function },
    showClose: { type: Boolean, default: true },
    // 按ESC关闭
    closeOnPressEscape: { type: Boolean, default: true },
    // 点击遮罩层关闭
    closeOnClickModal:{type:Boolean,default:true},
    // 自定义类名
    customClass:{type:String,default:''}
  })
  
    const dialog = ref();
    let dialogEl;
    const done = () => {
      emit("update:visible", false);
    };
    const close = () => {
      if (props.beforeClose) {
        props.beforeClose(done);
      } else {
        done();
      }
    };
    // 当开关的值发生变化,执行关闭逻辑(先执行beforeClose,再done())
    watch(
      () => {
        return props.visible;
      },
      (val) => {
        if (!val) {
          emit("close");
        } else {
          emit("open");
        }
      }
    );
    const opend = () => {
      // 当打开后获取Dialog的dom元素
      dialogEl = dialog.value;
      dialogEl.focus();
      emit("opend");
    };
    // 按ESC关闭
    const esc = (e) => {
      if (!props.closeOnPressEscape) return;
      close();
    };
    // 检测鼠标点击的范围
    const scope = (e) => {
      let startY = dialogEl.offsetTop;
      let startX = dialogEl.offsetLeft;
      let endX = startX + dialogEl.offsetWidth
      let endY = startY + dialogEl.offsetHeight      
      if(e.clientX >startX &&e.clientX<endX &&e.clientY > startY && e.clientY < endY ) return
      if(!props.closeOnClickModal)
      {
        dialogEl.focus()
        return
      }
      close()
    };
    const closed =()=>{
      emit('closed')
    }
</script>

<style lang="scss">
:root {
  --ht-dialog-width: 30%;
}
.ht-dialog-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2023;
  > .ht-dialog-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    > .ht-dialog {
      position: relative;
      outline: none;
      width: var(--ht-dialog--width);
      padding: 20px;
      background-color: white;
      border-radius: 3px;
      margin-left: auto;
      margin-right: auto;
      > header {
        padding-bottom: 10px;
        > .Close {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 6px;
          right: 0;
          padding: 0;
          width: 54px;
          height: 54px;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          > .icon-close {
            width: 1em;
            height: 1em;
            transition: all 0.2s;
          }
          &:hover > .icon-close {
            color: #409eff;
          }
        }
      }
      > main {
        padding: 30px 0;
      }
      > footer {
        display: flex;
        justify-content: end;
        padding-top: 10px;
      }
    }
  }
}
// 进场前的状态
.ht-dialog-enter-from {
  opacity: 0;
  .ht-dialog {
    opacity: 0;
    transform: translateY(-30px);
  }
}
// 进场结束的状态
.ht-dialog-enter-to {
  opacity: 1;
  .ht-dialog {
    opacity: 1;
    transform: translateY(0);
  }
}
.ht-dialog-enter-active {
  transition: all 0.25s ease-in-out;
  .ht-dialog {
    transition: all 0.25s ease-in-out;
  }
}
// 离场前的状态
.ht-dialog-leave-from {
  opacity: 1;
  .ht-dialog {
    opacity: 1;
    transform: translateY(0);
  }
}

// 离场后的状态
.ht-dialog-leave-to {
  opacity: 0;
  .ht-dialog {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.ht-dialog-leave-active {
  transition: all 0.25s ease-in-out;
  .ht-dialog {
    transition: all 0.25s ease-in-out;
  }
}
</style>