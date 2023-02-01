<template>
    <Transition name="ht-message">
      <div class="ht-message-overlay" v-if="visible">
        <div class="ht-message-wrapper">
          <div
            class="ht-message"
            :style="[{ width: width }]"
          >
            <header>
              <slot name="title">
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
              <slot  name="content"></slot>
            </main>
            <footer>
              <slot name="footer">
                <ht-button type="default" v-if="type==='confirm'">Cancel</ht-button>
                <ht-button type="primary" @click="ok_">{{confirmButtonText}}</ht-button>
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
 const emit = defineEmits()
  const props = defineProps({
    width: {
      type: [Number, String],
      default: "30%",
    },
    title: {
      type: String,
      default: "Tips",
    },
    visible:{
      type:Boolean,
      default:false
    },
    type:{
      type:String,
    },
    confirmButtonText:{
      type:String,
      default:'OK'
    },
    ok:{
      type:Function,
      default:function(){
        return function(){}
      }
    }
  })
    const visible_ = ref(false)
    const close = ()=>{
      // @ts-ignore
      emit('update:visible',false)
    }
    const ok_ = ()=>{
      props.ok()
      close()
    }
</script>

<style lang="scss">
:root {
  --ht-message-width: 30%;
}
.ht-message-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2023;
  > .ht-message-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    > .ht-message {
      position: relative;
      width: var(--ht-message--width);
      padding: 20px;
      background-color: white;
      border-radius: 3px;
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
.ht-message-enter-from {
  opacity: 0;
  .ht-message {
    opacity: 0;
    transform: translateY(-30px);
  }
}
// 进场结束的状态
.ht-message-enter-to {
  opacity: 1;
  .ht-message {
    opacity: 1;
    transform: translateY(0);
  }
}
.ht-message-enter-active {
  transition: all 0.25s ease-in-out;
  .ht-message {
    transition: all 0.25s ease-in-out;
  }
}
// 离场前的状态
.ht-message-leave-from {
  opacity: 1;
  .ht-message {
    opacity: 1;
    transform: translateY(0);
  }
}

// 离场后的状态
.ht-message-leave-to {
  opacity: 0;
  .ht-message {
    opacity: 0;
    transform: translateY(-30px);
  }
}
.ht-message-leave-active {
  transition: all 0.25s ease-in-out;
  .ht-message {
    transition: all 0.25s ease-in-out;
  }
}
</style>