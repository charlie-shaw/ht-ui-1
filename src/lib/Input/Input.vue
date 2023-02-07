<template>
  <div
    class="ht-input"
    :class="[{ isfocus }, { 'is-disabled': isdisabled }, classes]"
  >
    <div class="ht-input__wrapper" v-if="typeText !== 'textarea'">
      <input
        ref="input"
        class="ht-input__inner"
        :type="typeText"
        :value="modelValue"
        @input.stop="handlerInput"
        :placeholder="placeholder"
        @focus.stop="focus"
        @blur.stop="blur"
        @change.stop="change"
        :maxlength="maxlength"
        :minlength="minlength"
        :disabled="isdisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :autofocus="autofocus"
      />
      <span class="ht-input__suffix">
        <span
          class="ht-input__count-inner"
          v-if="
            (type === 'text' || type === 'textarea') &&
            showWordLimit &&
            maxlength
          "
          >{{ textLength }} / {{ maxlength }}</span
        >

        <i class="icon-view" v-if="showPassword" @click.stop="togglePassword">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#icon-${passwordIcon}`"></use>
          </svg>
        </i>

        <i
          class="icon-clear"
          v-if="typeText !== 'textarea' && clearable && textLength !== 0"
          @click.stop="clear"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-circle-close"></use>
          </svg>
        </i>
      </span>
    </div>

    <div class="ht-textarea" v-if="typeText === 'textarea'">
      <textarea
        :value="modelValue"
        :cols="cols"
        :rows="rows"
        class="ht-textarea__inner"
        @input.stop="handlerInput"
        :placeholder="placeholder"
        @focus.stop="focus"
        @blur.stop="blur"
        :maxlength="maxlength"
        :minlength="minlength"
        :disabled="isdisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :autofocus="autofocus"
      ></textarea>
      <span
        class="ht-input__count-inner"
        v-if="
          (type === 'text' || type === 'textarea') && showWordLimit && maxlength
        "
        >{{ textLength }} / {{ maxlength }}</span
      >
    </div>
    <!-- </label> -->
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
const isfocus = ref(false);
const isclear = ref(0);
// input的dom
const input = ref();
const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  type: { type: String, default: "text" },
  placeholder: { type: String },
  maxlength: { type: [String, Number] },
  minlength: { type: [String, Number] },
  showWordLimit: { type: Boolean },
  disabled: { type: Boolean, default: false },
  showPassword: { type: Boolean, default: false },
  clearable: { type: Boolean, default: false },
  size: { type: String, default: "suffix" },
  readonly: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  autofocus: { type: Boolean, default:false},
  tabindex: { type: [String, Number] },
  rows: { type: [String, Number] },
  cols: { type: [String, Number] },
});

const typeText = ref(props.type);

const passwordIcon = computed(() => {
  return typeText.value === "text"
    ? "view"
    : typeText.value === "password"
    ? "hide"
    : "";
});
const focus = () => {
  isfocus.value = true;
  emits("focus");
};
const blur = () => {
  isfocus.value = false;
  emits("blur");
};
const change=()=>{
  emits('change')
}
const handlerInput=(e)=>{
  emits('update:modelValue',e.target.value)
  emits('input')
}
const textLength = computed(() => {
  return props.modelValue.length;
});
const isdisabled = computed(() => {
  return props.disabled;
});
const togglePassword = () => {
  let text = typeText.value === "text" ? "password" : "text";
  typeText.value = text;
  emits("update:type", text);
};
const classes = computed(() => {
  return {
    [`ht-input--${props.size}`]: props.size,
  };
});
watch(
  () => {
    return props.type;
  },
  (val) => {
    typeText.value = val;
  }
);
const clear = () => {
  emits("update:modelValue", "");
  emits("clear");
};

const emits = defineEmits([
  "update:modelValue",
  "update:type",
  "focus",
  "blur",
  "clear",
  'change',
  'input'
]);
</script>
<style lang="scss">
.ht-textarea {
  width: 100%;
  position: relative;
  .ht-input__count-inner{
    position: absolute;
    right: 0;bottom: 2px;
  }
  .ht-textarea__inner {
    resize: vertical;
    outline: none;
    width: 100%;
    border: none;
    display: block;
  }
}
.ht-input {
  font-size: 14px;
  color: #a8abb2;
  display: flex;
  padding: 1px 11px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: var(--ht-border-radius-base);
  box-shadow: 0 0 0 1px var(--border-color) inset;
  transition: all 0.25s;
  .ht-input__wrapper {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  label {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
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

  .ht-textarea__inner{
    font-size: inherit;
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
    span {
      margin-left: 10px;
    }
    i {
      cursor: pointer;
      margin-left: 10px;
    }
    svg {
      height: 14px;
      width: 14px;
      fill: currentColor;
    }
  }

  &.ht-input--large {
    .ht-input__inner {
      line-height: var(--ht-component-size-large);
    }
  }
  &.ht-input--small {
    font-size: 12px;
    .ht-input__inner {
      line-height: var(--ht-component-size-small);
    }
  }
}
</style>