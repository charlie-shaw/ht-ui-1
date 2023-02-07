<template>
  <Demo :component="InputBasic"></Demo>
  <Demo :component="InputDisabled" :desc-component="InputDisabledDesc"></Demo>
  <Demo :component="InputClearable" :desc-component="InputClearableDesc"></Demo>
  <Demo
    :component="InputShowPassword"
    :desc-component="InputShowPasswordDesc"
  ></Demo>
  <Demo :component="InputTextarea" :desc-component="InputTextareaDesc"></Demo>
  <Demo :component="InputSize" :desc-component="InputSizeDesc"></Demo>
  <Demo :component="InputMaxLength" :desc-component="InputMaxLengthDesc"></Demo>
  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
  <!-- 事件 -->
  <Api :title="EventTitle" :theads="EventTheads" :bodyData="EventBodyData"></Api>
</template>

<script setup>
import InputBasic from "../../components/Input/InputBasic.vue";
import InputDisabled from "../../components/Input/InputDisabled.vue";
import InputDisabledDesc from "../../components/Input/InputDisabledDesc.vue";
import InputClearable from "../../components/Input/InputClearable.vue";
import InputClearableDesc from "../../components/Input/InputClearableDesc.vue";
import InputShowPassword from "../../components/Input/InputShowPassword.vue";
import InputShowPasswordDesc from "../../components/Input/InputShowPasswordDesc.vue";
import InputTextarea from "../../components/Input/InputTextarea.vue";
import InputTextareaDesc from "../../components/Input/InputTextareaDesc.vue";
import InputSize from "../../components/Input/InputSize.vue";
import InputSizeDesc from "../../components/Input/InputSizeDesc.vue";
import InputMaxLength from "../../components/Input/InputMaxLength.vue";
import InputMaxLengthDesc from "../../components/Input/InputMaxLengthDesc.vue";
const ApiTitle = "属性";
const ApiTheads = ["属性名", "说明", "类型", "默认值"];
const ApiBodyData = [
  ["type", "类型", "<code>string </code>", "text"],
  [
    "<code>v-model</code>",
    "绑定值",
    "<code>string</code>/<code>number</code> ",
    "",
  ],
  ["maxlength", "最大输入长度", "<code>string</code>/<code>number</code> ", ""],
  ["minlength", "原生属性，最小输入长度", "<code>number</code> ", ""],
  ["show-word-limit", "是否显示统计字数, 只在 <code>type</code> 为 'text' 或 'textarea' 的时候生效", "<code>boolean</code> ", "<code>false</code>"],
  ["placeholder", "输入框占位文本", "<code>string</code> ", ""],
  ["clearable", "是否显示清除按钮，只有当 <code>type</code> 不是 textarea时生效", "<code>boolean</code> ", "false"],
  ["show-password", "	是否显示切换密码图标", "<code>boolean</code> ", "false"],
  ["disabled", "是否禁用", "<code>boolean</code> ", "false"],
  ["size", "输入框尺寸，只在 <code>type</code> 不为 'textarea' 时有效", "<code>'large' | 'default' | 'small'</code> ", ""],
  ["rows", "输入框行数，仅 <code>type</code> 为 'textarea' 时有效", "<code>number</code> ", "<code>number</code>"],
  ["autocomplete", "原生 autocomplete 属性", "<code>string</code> ", "off"],
  ["readonly", "原生  readonly 属性，是否只读", "<code>boolean</code> ", "false"],
  ["autofocus", "原生属性，自动获取焦点", "<code>boolean</code> ", "false"],
  ["tabindex", "输入框的 tabindex", "<code>string</code>/<code>number</code> ", ""],

];
const EventTitle = "事件";
const EventTheads = ["事件名", "说明", "类型"];
const EventBodyData = [
  ["blur", "当选择器的输入框失去焦点时触发", "<code>Function </code>"],
  ["focus", "当选择器的输入框获得焦点时触发", "<code>Function </code>"],
  ["change", "仅当 modelValue 改变时，当输入框失去焦点触发", "<code>Function </code>"],
  ["input", "在 Input 值改变时触发", "<code>Function </code>"],
  ["clear", "在点击由 <code>clearable</code> 属性生成的清空按钮时触发", "<code>Function </code>"],

];
</script>

<style lang="scss" scoped>
</style>