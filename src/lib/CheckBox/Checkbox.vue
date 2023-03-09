<template>
  <label class="ht-checkbox" :class="[classes, stateClass]">
    <span class="ht-checkbox__input" :class="[stateClass]">
      <input
        ref="checkbox"
        type="checkbox"
        :value="label"
        :disabled="isDisabled"
        class="ht-checkbox__original"
        @change="handlerChange"
        :checked="isChecked"
        :name="name"
        :true-value="trueLabel"
        :false-value="falseLabel"
        :tabindex="tabindex"
        :id="id"
      />
      <span class="ht-checkbox__inner"></span>
    </span>
    <span class="ht-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup>
import {
  computed,
  onMounted,
  ref,
  watchEffect,
  getCurrentInstance,
  nextTick,
  inject,
  toRaw,
} from "vue";

const props = defineProps({
  label: { type: String },
  size: { type: String },
  modelValue: { type: [String, Number, Boolean] },
  disabled: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
  name: { type: String },
  trueLabel: { type: [Number, String] },
  falseLabel: { type: [Number, String] },
  indeterminate: { type: Boolean, default: false },
  tabindex: { type: [String, Number] },
  checked: { type: Boolean },
  id: { type: String },
});
const emits = defineEmits(["update:modelValue", "change"]);
const classes = computed(() => {
  return {
    [`ht-checkbox--${props.size}`]: props.size ? true : false,
  };
});
const stateClass = computed(() => {
  return {
    ["is-checked"]: isChecked.value,
    ["is-disabled"]: isDisabled.value,
    ["is-border"]: isBorder.value,
    ["is-indeterminate"]: props.indeterminate,
  };
});
// checkbox的Dom元素
const checkbox = ref(null);
const _checkboxGroup = ref(null);
const SelfModel = ref(false);
const checkboxGroup = inject("checkboxGroupContentKey", undefined);
// 获取model的值，作为v-model绑定的值
const model = computed({
  get() {
    return isGroup.value
      ? checkboxGroup?.modelValue?.value
      : props.modelValue ?? selfModel.value;
  },
  set(val) {
    if (isGroup.value) {
      const parent = _checkboxGroup.value;
      parent.emit("update:modelValue", val);
      parent.emit("change", val);
    }
  },
});

// 判断是否选中
const isChecked = computed(() => {
  const value = model.value;
  if (typeof value === "boolean") {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(toRaw).includes(props.label);
  } else if (value !== null && value !== undefined) {
    return value === props.trueLabel;
  } else {
    return !!value;
  }
});

// 限制Disabled
const isLimitDisabled = computed(() => {
  const max = checkboxGroup?.max?.value;
  const min = checkboxGroup?.min?.value;
  return (
    (max !== undefined && model.value.length >= max && !isChecked.value) ||
    (min !== undefined && model.value.length <= min && isChecked.value)
  );
});

const handlerChange = async (e) => {
  const target = e.target;
  emits("update:modelValue", target.checked);
  if (isGroup.value) {
    model.value = getLabeledValue(target.checked, props.label);
  }
  await nextTick();
  emits("change", model.value);
};
const getLabeledValue = (state, label) => {
  if (state) {
    return model.value.push(label) && [...model.value];
  } else {
    return model.value.filter((item) => item !== label);
  }
};
// 判断是否被CheckboxGroup包裹
const isGroup = computed(() => {
  let parent = getCurrentInstance().parent;
  while (parent) {
    if (parent.type["__name"] !== "CheckboxGroup") {
      parent = parent.parent;
    } else {
      _checkboxGroup.value = parent;
      return true;
    }
  }
  return false;
});

// 判断disabled
const isDisabled = computed(() => {
  return isGroup.value
    ? checkboxGroup?.disabled.value
      ? checkboxGroup?.disabled.value
      : props.disabled || isLimitDisabled.value
    : props.disabled;
});


// 判断是否需要border边框
const isBorder = computed(() => {
  return isGroup.value
    ? _checkboxGroup.value.props.border
      ? _checkboxGroup.value.props.border
      : props.border
    : props.border;
});
</script>

<style lang="scss">
.ht-checkbox {
  font-size: 14px;
  color: var(--ht-text-color-regular);
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
  height: 32px;
  padding: 0 15px 0 9px;

  .ht-checkbox__original {
    display: none;
  }
  .ht-checkbox__input {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }
  .ht-checkbox__inner {
    width: 14px;
    height: 14px;
    display: inline-block;
    position: relative;
    transition: all 0.15s;
    border: 1px solid var(--border-color);
    border-radius: var(--ht-checkbox-border-radius);
    &::after {
      box-sizing: content-box;
      content: "";
      border: 1px solid var(--ht-bg-color);
      height: 7px;
      width: 3px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      transition: all 0.15s ease-in 50ms;
      transform-origin: center;
      border-left: 0;
      border-top: 0;
      opacity: 0;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      right: 0;
      height: 2px;
      display: block;
      transform: scale(0.5);
      background-color: var(--ht-bg-color);
      opacity: 0;
      transition: all 0.15s ease-in 50ms;
    }
  }
  &.ht-checkbox--large {
    height: 40px;
    padding: 0 19px 0 11px;
    .ht-checkbox__inner {
      width: 14px;
      height: 14px;
    }
  }

  &.ht-checkbox--small {
    font-size: 12px;
    padding: 0 11px 0 7px;
    height: 24px;
    .ht-checkbox__inner {
      width: 12px;
      height: 12px;
      &::after {
        height: 6px;
        width: 2px;
      }
    }
  }
  &.is-checked {
    .ht-checkbox__label {
      color: var(--ht-color-primary);
    }
    .ht-checkbox__inner {
      background-color: var(--ht-color-primary);
      border-color: var(--ht-color-primary);
    }
    .ht-checkbox__inner::after {
      transform: rotate(45deg) scaleY(1);
      opacity: 1;
    }
    &.is-border {
      border-color: var(--ht-color-primary);
    }
  }
  &.is-disabled {
    .ht-checkbox__inner {
      background-color: var(--ht-input-disabled-bgcolor);
      border-color: var(--border-color);
    }
    .ht-checkbox__label {
      color: var(--ht-input-disabled-text-color);
    }
    cursor: not-allowed;

    &.is-checked {
      .ht-checkbox__inner::after {
        border-color: var(--ht-input-disabled-text-color);
      }
    }
    &.is-border {
      border-color: var(--ht-border-color-lighter);
    }
  }
  &.is-border {
    border: 1px solid var(--border-color);
    border-radius: var(--ht-border-radius-base);
  }
  &.is-indeterminate {
    .ht-checkbox__inner {
      background-color: var(--ht-color-primary);
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>