<template>
  <div class="ht-input-number" :class="[classes, { 'is-disabled': disabled }]">
    <i
      class="ht-icon ht-input-number__decrease"
      @click.stop="handlerDecrease"
      :class="[{ 'is-disabled': modelValue === min || disabled }]"
    >
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
        ></path>
      </svg>
    </i>
    <input
      type="number"
      class="ht-input__inner"
      v-model="number_value"
      @focus="handlerFocus"
      @blur="handlerBlur"
      @input="handlerInput"
      @change="handlerChange"
      ref="number"
      :disabled="disabled"
    />
    <i
      class="ht-icon ht-input-number__increase"
      @click.stop="handlerIncrease"
      :class="[{ 'is-disabled': modelValue === max || disabled }]"
    >
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
        ></path>
      </svg>
    </i>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { plus, minus } from "number-precision";
const props = defineProps({
  modelValue: { type: [String, Number], default: 0 },
  step: { type: Number, default: 1 },
  max: { type: Number, default: Infinity },
  min: { type: Number, default: -Infinity },
  disabled: { type: Boolean, default: false },
  stepStrictly: { type: Boolean, default: false },
  precision: { type: Number, default: 0 },
  size: { type: String, default: "default" },
  
});
const emits = defineEmits(["update:modelValue",'change','blur','focus']);
const isfocus = ref(false);
const number = ref();
const number_value = ref(props.modelValue);
const handlerFocus = (e) => {
  isfocus.value = true;
  emits('focus',e)
};
const handlerBlur = (e) => {
  isfocus.value = false;
  emits('blur',e)
};
const handlerInput = (e) => {
  number_value.value = e.target.value ? e.target.value : '';
  setValue(rangeVal.value);
};
const handlerIncrease = (e) => {
  if (e.target.closest("i").className.includes("is-disabled")) return;
  if (props.modelValue === props.max) return;
  number_value.value = plus(number_value.value, props.step);
  number_value.value = rangeVal.value;
  setValue(number_value.value);
};
const handlerDecrease = (e) => {
  if (e.target.closest("i").className.includes("is-disabled")) return;
  if (props.modelValue === props.min) return;
  number_value.value = minus(number_value.value, props.step);
  number_value.value = rangeVal.value;
  setValue(number_value.value);
};
const handlerChange = (e) => {
  number_value.value = rangeVal.value;
  emits('change',number_value.value)
  setValue(number_value.value);
};
const classes = computed(() => {
  return {
    isfocus: isfocus.value,
    [`ht-input--${props.size}`]: props.size,
  };
});
// 求符合条件的数字
const rangeVal = computed(() => {
  let value = format.value;
  if (props.stepStrictly && Number.isInteger(props.step)) {
    // 倍数
    let multiple = Math.floor(value / props.step);
    // 余数
    let remainder = value % props.step;
    // // 中间值
    let median = props.step / 2;
    let basic = props.step * multiple;
    (remainder >= median && (value = basic + props.step)) || (value = basic);
  }
  value =
    (value <= props.min && props.min) ||
    (value >= props.max && props.max) ||
    value;
  return value;
});
const setValue = (val) => {
  let value = val;
  (val < props.min && (value = props.min)) ||
    (val > props.max && (value = props.max));
  emits("update:modelValue", value);
};
const format = computed(() => {
  return (+number_value.value).toFixed(props.precision);
});

const focus = ()=>{
  number.value.focus()
}
const blur = ()=>{
number.value.blur()
}

// 需要暴露出去的方法或变量
defineExpose({
  focus,
  blur
})
</script>

<style lang="scss">
.ht-input-number {
  user-select: none;
  width: 150px;
  display: inline-flex;
  justify-content: center;
  line-height: 30px;
  font-size: 14px;
  color: #a8abb2;
  padding: 1px;
  overflow: hidden;
  border-radius: var(--ht-border-radius-base);
  box-shadow: 0 0 0 1px var(--border-color) inset;
  transition: all 0.25s;
  &:hover {
    box-shadow: 0 0 0 1px var(--ht-input-hover-border-color) inset;
  }
  &.isfocus {
    box-shadow: 0 0 0 1px var(--ht-color-primary) inset;
  }
  &.is-disabled {
    cursor: not-allowed;
  }
  .ht-input__inner {
    padding: 0 8px;
    text-align: center;
    &:disabled {
      cursor: not-allowed;
    }
  }
  &.ht-input--large {
    i {
      width: var(--ht-input-height-large);
    }
    input {
      line-height: var(--ht-input-height-large);
    }
  }
  &.ht-input--small {
    i {
      width: var(--ht-input-height-small);
    }
    input {
      line-height: var(--ht-input-height-small);
    }
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--ht-input-height-default);
    cursor: pointer;
    flex-shrink: 0;
    height: auto;
    color: var(--ht-text-color-regular);
    background-color: var(--ht-fill-color-light);
    &:hover {
      color: var(--ht-color-primary);
    }
    &.is-disabled {
      cursor: not-allowed;
      color: var(--ht-input-disabled-text-color);
    }
  }
  .ht-input-number__decrease {
    border-radius: var(--ht-border-radius-base) 0 0 var(--ht-border-radius-base);
  }
  .ht-input-number__increase {
    border-radius: 0 var(--ht-border-radius-base) var(--ht-border-radius-base) 0;
  }
  .ht-input__inner::-webkit-inner-spin-button {
    display: none;
  }
}
</style>