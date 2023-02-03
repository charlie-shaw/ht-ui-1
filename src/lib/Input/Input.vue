<template>
  <div class="ht-input" :class="[{ isfocus }, { 'is-disabled': isdisabled }]">
    <!-- <label> -->
      <input
        ref="input"
        class="ht-input__inner"
        :type="typeText"
        :value="modelValue"
        @input.stop="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @focus.stop="focus"
        @blur.stop="blur"
        :maxlength="maxlength"
        :minlength="minlength"
        :disabled="isdisabled"
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

        <i class="icon-clear" v-if="typeText!=='textarea'&&clearable&&textLength!==0" @click.stop="clear">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-circle-close"></use>
          </svg>
        </i>
      </span>
    <!-- </label> -->
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
const isfocus = ref(false);
const isclear = ref(0)
// input的dom
const input = ref();
const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: "text" },
  placeholder: { type: String },
  maxlength: { type: [String, Number] },
  minlength: { type: [String, Number] },
  showWordLimit: { type: Boolean },
  disabled: { type: Boolean, default: false },
  showPassword: { type: Boolean, default: false },
  clearable:{type:Boolean,default:false},
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
  emits('focus')
};
const blur = () => {
  isfocus.value = false;
  emits('blur')
};
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

watch(
  () => {
    return props.type;
  },
  (val) => {
    typeText.value = val;
  }
);
const clear =()=>{
  emits('update:modelValue','')

}

const emits = defineEmits(["update:modelValue", "update:type",'focus','blur']);
</script>
<style lang="scss">
.ht-input {
  color: #a8abb2;
  display: flex;
  padding: 1px 11px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: var(--ht-border-radius-base);
  box-shadow: 0 0 0 1px var(--border-color) inset;
  transition: all 0.25s;
  label{
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
}
</style>