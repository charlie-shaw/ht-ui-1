<template>
  <label class="ht-radio" :class="[styleClass]">
    <span class="ht-radio__input">
      <input
        type="radio"
        :value="value"
        :disabled="isDisabled"
        :name="Name"
        @change="handlerChange"
      />
    </span>
    <span class="ht-radio__label">
      <slot />
    </span>
  </label>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
  useAttrs,
  watch,
  getCurrentInstance,
  inject,
} from "vue";

const props = defineProps({
  name: { type: String },
  modelValue: { type: [String, Number, Boolean] },
  label: { type: [String, Number, Boolean] },
  border: { type: Boolean },
  size: { type: String, default: "large" },
  disabled: { type: Boolean, default: false },
});
const attrs = useAttrs();
const emits = defineEmits(["update:modelValue", "change"]);
const value = ref(props.label);

const _radioGroup = ref(null);

const isChecked = computed(() => {
  return model.value === props.label;
});


const styleClass = computed(() => {
  return {
    ["is-checked"]: isChecked.value,
    ["is-bordered"]: props.border,
    [`ht-radio--${Size.value}`]: Size.value,
    [`is-disabled`]: isDisabled.value,
  };
});
const handlerChange = (e) => {
  if (isChecked.value) return;
  model.value = value.value;
};

// 判断是否为RadioGroup
const isGroup = computed(() => {
  let parent = getCurrentInstance().parent;
  while (parent) {
    if (parent.type["__name"] !== "RadioGroup") {
      parent = parent.parent;
    } else {
      _radioGroup.value = parent;
      return true;
    }
  }
  return false;
});

// 判断disabled
const isDisabled = computed(() => {
  return isGroup.value
    ? _radioGroup.value.props.disabled
      ? _radioGroup.value.props.disabled
      : props.disabled
    : props.disabled;
});
// 判断size是自身的还是radioGroup上的
const Size = computed(() => {
  return isGroup.value
    ? _radioGroup.value.props.size
      ? _radioGroup.value.props.size
      : props.size
    : props.size;
});
//
const Name = computed(() => {
  return isGroup.value
    ? _radioGroup.value.props.name
      ? inject("RadioNameId")
      : props.name
      ? props.name
      : inject("RadioNameId")
    : props.name;
});


const model = computed({
  get() {
    return isGroup.value
      ? _radioGroup.value.props.modelValue !== undefined
        ? _radioGroup.value.props.modelValue
        : props.modelValue
      : props.modelValue;
  },
  set(val) {
    if (isGroup.value) {
      _radioGroup.value.emit("update:modelValue", val);
      _radioGroup.value.emit("change",val)

    }
    emits("update:modelValue", val);
    emits("change", val);
  },
});
</script>

<style lang="scss">
.ht-radio {
  margin-right: 32px;
  user-select: none;
  color: var(--ht-text-color-regular);
  height: 40px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  .ht-radio__input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 8px;
    border: 1px solid var(--border-color);
    background-color: #ffffff;
    input {
      display: none;
    }
    &:hover {
      border-color: var(--ht-color-primary);
    }
    &::after {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      background-color: var(--ht-bg-color);
      border-radius: 50%;
      transform: scale(0);
    }
  }
  &.is-checked {
    color: var(--ht-color-primary);
    .ht-radio__input {
      background-color: var(--ht-color-primary);
      border: 1px solid var(--ht-color-primary);
      &::after {
        transition: all 0.25s;
        transform: scale(1);
      }
    }
    &.is-bordered {
      border-color: var(--ht-color-primary);
    }
    &.is-disabled {
      .ht-radio__input{
        border-color: var(--ht-input-disabled-border-color);
      }
    }
  }
  &.is-bordered {
    padding: 0 19px 0 11px;
    border-radius: var(--ht-border-radius-base);
    border: 1px solid var(--ht-input-hover-border-color);
  }
  &.ht-radio--default {
    height: 32px;
    &.is-bordered {
      padding: 0 15px 0 9px;
    }
  }
  &.ht-radio--small {
    font-size: 12px;
    height: 24px;
    &.is-bordered {
      padding: 0 11px 0 7px;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--ht-border-color-lighter);
    &.is-bordered {
      border-color: var(--ht-input-disabled-border-color);
    }
    .ht-radio__input {
      background-color: var(--ht-input-disabled-bgcolor);
      &::after {
        background-color: var(--ht-input-disabled-text-color);
      }
      &:hover{
        border: none;
      }
    }
  }
}
</style>