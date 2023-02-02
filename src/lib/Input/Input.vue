<template>
  <div class="ht-input" :class="[{ isfocus }, { 'is-disabled': isdisabled }]">
    <input
      class="ht-input__inner"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      @focus="focus"
      @blur="blur"
      :maxlength="maxlength"
      :minlength="minlength"
      :disabled="isdisabled"
    />
    <span
      class="ht-input__suffix"
      v-if="
        (type === 'text' || type === 'textarea') && showWordLimit && maxlength
      "
    >
      <span class="ht-input__count-inner"
        >{{ textLength }} / {{ maxlength }}</span
      >
    </span>
    
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const isfocus = ref(false);
const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: "text" },
  placeholder: { type: String },
  maxlength: { type: [String, Number] },
  minlength: { type: [String, Number] },
  showWordLimit: { type: Boolean },
  disabled: { type: Boolean, default: false },
});

const focus = () => {
  isfocus.value = true;
};
const blur = () => {
  isfocus.value = false;
};
const textLength = computed(() => {
  return props.modelValue.length;
});
const isdisabled = computed(() => {
  return props.disabled;
});

defineEmits(["update:modelValue"]);
</script>
<style lang="scss">
.ht-input {
  display: flex;
  padding: 1px 11px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
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
    box-shadow: 0 0 0 1px var(--ht-input-disabled-border-color) inset;
    background-color: var(--ht-input-disabled-bgcolor);
    .ht-input__inner {
        cursor: not-allowed;
      &::placeholder {
        color: var(--ht-input-disabled-text-color);
      }
      &.ht-input__suffix {
        color: var(--ht-input-disabled-text-color);
      }
    }
  }
  .ht-input__inner {
    border: none;
    outline: none;
    width: 100%;
    line-height: 32px;
  }
  .ht-input__suffix {
    display: inline-flex;
    white-space: nowrap;
    height: 100%;
    flex-shrink: 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
}
</style>