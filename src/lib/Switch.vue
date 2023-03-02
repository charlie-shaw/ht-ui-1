<template>
  <div class="ht-switch" :class="[SwitchClass]">
    <label>
      <span class="ht-switch--left" :class="[{ 'is-active': !modelValue }]">{{
        inactiveText
      }}</span>
      <button
        @click.stop="toggle"
        :disabled="disabled || loading"
        :style="[
          { '--switch-on-color': activeColor },
          { '--switch-off-color': inactiveColor },
          // @ts-ignore
          Stylecss,
          { width: width },
        ]"
      >
        <span class="ht-switch__action">
          <i class="is-loading" v-if="loading">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
              ></path>
            </svg>
          </i>
        </span>
      </button>
      <span class="ht-switch--right" :class="[{ 'is-active': modelValue }]">{{
        activeText
      }}</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed ,onMounted,watch} from "vue";
   const props = defineProps( {
    modelValue: [Boolean,String,Number],
    disabled: { type: Boolean, default: false },
    activeColor: { type: String, default: "#409EFF" },
    inactiveColor: { type: String, default: "#DCDFE6" },
    style: { type: Object },
    // 选中文字颜色
    activeText: { type: String },
    inactiveText: { type: String },
    size: { type: String },
    width: { type: String, default: "20px" },
    loading: { type: Boolean, default: false },
    beforeChange:{type:Function},
    activeValue:{type:[Boolean,String,Number],default:true},
    inactiveValue:{type:[Boolean,String,Number],default:false},
  })
  const emit = defineEmits(["update:modelValue",'change'],)
    const SwitchActive = ref(null);
    const SwitchClass = computed(() => {
      const size = props.size;
      return {
        "is-checked": props.modelValue,
        "is-disabled": props.disabled || props.loading,
        [`ht-switch--${size}`]: size,
      };
    });
    const Stylecss = computed(() => {
      return props.style;
    });
    const beforeChange =async ()=>{
      const val =  await props.beforeChange?.()
      
      return val
    }
    const toggle =async () => {
      if (props.disabled) return;
      const Switch = await beforeChange()
      if(Switch!==true && Switch!==undefined) return
      emit("update:modelValue", !props.modelValue);
      // @ts-ignore
      emit('change',!props.modelValue)
    };

</script>

<style lang="scss">
@import "./global.scss";
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
  &.is-disabled button::after {
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

  button {
    height: $h;
    width: $h * 2;
    min-width: 40px;
    border: none;
    background: var(--switch-off-color);
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    .ht-switch__action {
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
  position: relative;
  margin-bottom: 0.5rem !important;
  label {
    cursor: pointer;
    display: inline-flex;
  }
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
.is-loading {
  svg {
    animation: loading 2s linear infinite;
  }
}
@keyframes loading {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>