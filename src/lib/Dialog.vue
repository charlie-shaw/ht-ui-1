<template>
  <Teleport to="body">
    <Transition name="ht-dialog" @afterEnter="opend">
      <div class="ht-dialog-overlay" v-if="visible">
        <div class="ht-dialog-wrapper">
          <div
            class="ht-dialog"
            :style="[{ width: width }, { marginTop: top }]"
          >
            <header>
              <slot name="header">
                <span>{{ title }}</span>
              </slot>
              <button class="Close" @click="close">
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
                <ht-button @click="close">Cancel</ht-button>
                <ht-button type="primary" @click="close">Ok</ht-button>
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import htButton from "./Button.vue";
import {watch} from 'vue'
export default {
  components: { htButton },
  emits:['close','update:visible','open','opend'],
  props: {
    width: {
      type: [Number, String],
      default: "30%",
    },
    title: {
      type: String,
      default: "Tips",
    },
    visible: {
      type: Boolean,
      default: true,
    },
    top: {
      type: String,
      default: "15vh",
    },
    beforeClose:{
      type:Function
    }
  },
  setup(props, ctx) {
    const done = ()=>{
      ctx.emit("update:visible", false);
    }
    const close = () => {
      if(props.beforeClose){
        props.beforeClose(done)
      }else{
        done()
      }
    };
    // 当开关的值发生变化,执行关闭逻辑(先执行beforeClose,再done())
    watch(()=>{
      return props.visible
    },(val)=>{
      if(!val) {
        ctx.emit("close")
      }else{
        ctx.emit("open")
      }
    })
    const opend = ()=>{
      ctx.emit('opend')
    }
    return { close,opend };
  },
};
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