<template>
  <h2 style="margin-bottom: 20px">Input Number 数字输入框</h2>
  <p>仅允许输入标准的数字值，可定义范围</p>
  <Demo
    :component="InputNumberBasic"
    :desc-component="InputNumberBasicDesc"
  ></Demo>
  <Demo
    :component="InputNumberDisabled"
    :desc-component="InputNumberDisabledDesc"
  ></Demo>
  <Demo
    :component="InputNumberStep"
    :desc-component="InputNumberStepDesc"
  ></Demo>
  <Demo
    :component="InputNumberStrictly"
    :desc-component="InputNumberStrictlyDesc"
  ></Demo>
  <Demo
    :component="InputNumberPrecision"
    :desc-component="InputNumberPrecisionDesc"
  ></Demo>
  <Demo
    :component="InputNumberSize"
    :desc-component="InputNumberSizeDesc"
  ></Demo>
  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
  <!-- 事件 -->
  <Api
    :title="EventTitle"
    :theads="EventTheads"
    :bodyData="EventBodyData"
  ></Api>
  <!-- 方法 -->
  <Api
    :title="MethodsTitle"
    :theads="MethodsTheads"
    :bodyData="MethodsBodyData"
  ></Api>
</template>

<script setup>
import InputNumberBasic from "../../components/InputNumber/InputNumberBasic.vue";
import InputNumberBasicDesc from "../../components/InputNumber/InputNumberBasicDesc.vue";
import InputNumberDisabled from "../../components/InputNumber/InputNumberDisabled.vue";
import InputNumberDisabledDesc from "../../components/InputNumber/InputNumberDisabledDesc.vue";
import InputNumberStep from "../../components/InputNumber/InputNumberStep.vue";
import InputNumberStepDesc from "../../components/InputNumber/InputNumberStepDesc.vue";
import InputNumberStrictly from "../../components/InputNumber/InputNumberStrictly.vue";
import InputNumberStrictlyDesc from "../../components/InputNumber/InputNumberStrictlyDesc.vue";
import InputNumberPrecision from "../../components/InputNumber/InputNumberPrecision.vue";
import InputNumberPrecisionDesc from "../../components/InputNumber/InputNumberPrecisionDesc.vue";
import InputNumberSize from "../../components/InputNumber/InputNumberSize.vue";
import InputNumberSizeDesc from "../../components/InputNumber/InputNumberSizeDesc.vue";
const ApiTitle = "属性";
const ApiTheads = ["属性名", "说明", "类型", "可选值", "默认值"];
const ApiBodyData = [
  ["v-model", "选中项绑定值", "<code>number </code>", "", ""],
  [
    "<code>min</code>",
    "设置计数器允许的最小值",
    "<code>number</code>",
    "",
    "<code>-Infinity</code>",
  ],
  [
    "<code>max</code>",
    "设置计数器允许的最大值",
    "<code>number</code>",
    "",
    "<code>Infinity</code>",
  ],
  ["step", "计数器步长", "<code>number</code>", "", "1"],
  [
    "step-strictly",
    "是否只能输入 step 的倍数",
    "<code>boolean</code>",
    "",
    "false",
  ],
  ["precision", "数值精度", "<code>number</code>", "", ""],
  [
    "size",
    "计数器尺寸	",
    "<code>string</code>",
    "large/default/small",
    "default",
  ],
  ["disabled", "是否禁用状态	", "<code>boolean</code>", "", "false"],
];
const EventTitle = "事件";
const EventTheads = ["事件名", "说明", "回调函数"];
const EventBodyData = [
  ["change", "绑定值被改变时触发", "(currentValue: number)"],
  ["blur", "在组件 Input 失去焦点时触发", "(event: FocusEvent)"],
  ["focus", "在组件 Input 获得焦点时触发	", "(event: FocusEvent)"],
];
const MethodsTitle = "方法";
const MethodsTheads = ["方法名", "说明", "参数"];
const MethodsBodyData = [
  ["focus", "使 input 组件获得焦点	", ""],
  ["blur", "使 input 组件失去焦点	", ""],
];
</script>

<style lang="scss" scoped>
</style>