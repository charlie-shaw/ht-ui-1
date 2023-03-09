<template>
  <h1>Checkbox多选框</h1>
  <!-- 基本使用 -->
  <Demo :component="CheckboxBasic" :descComponent="CheckboxBasicDesc"></Demo>
  <!-- 禁用状态 -->
  <Demo
    :component="CheckboxDisabled"
    :descComponent="CheckboxDisabledDesc"
  ></Demo>
  <!-- 多选框组 -->
  <Demo
    :component="CheckboxGroupBasic"
    :descComponent="CheckboxGroupBasicDesc"
  ></Demo>
  <!-- 可选项目数量的限制 -->
  <Demo :component="CheckboxNum" :descComponent="CheckboxNumDesc"></Demo>
  <!-- 全选 -->
  <Demo :component="CheckboxAll" :descComponent="CheckboxAllDesc"></Demo>
  <!-- 带有边框 -->
  <Demo :component="CheckboxBorder" :descComponent="CheckboxBorderDesc"></Demo>

  <!-- Api属性 -->
  <Api
    :title="CheckboxTitle"
    :theads="CheckboxTheads"
    :bodyData="CheckboxBodyData"
  ></Api>
  <!-- Api属性 -->
  <Api
    :title="CheckboxEvent"
    :theads="CheckboxEventTheads"
    :bodyData="CheckboxEventBodyData"
  ></Api>
  <!-- Api属性 -->
  <Api
    :title="CheckboxSlots"
    :theads="CheckboxSlotsTheads"
    :bodyData="CheckboxSlotsBodyData"
  ></Api>
  <!-- Api属性 -->
  <Api
    :title="CheckboxGroupTitle"
    :theads="CheckboxGroupTheads"
    :bodyData="CheckboxGroupBodyData"
  ></Api>
  <Api
    title="CheckboxGroup Events"
    :theads="CheckboxEventTheads"
    :bodyData="CheckboxEventBodyData"
  ></Api>
  <!-- Api属性 -->
  <Api
    :title="CheckboxGroupSlotsTitle"
    :theads="CheckboxGroupSlotsTheads"
    :bodyData="CheckboxGroupSlotsBodyData"
  ></Api>
</template>

<script lang="ts" setup>
import CheckboxBasic from "../../components/Checkbox/CheckboxBasic.vue";
import CheckboxBasicDesc from "../../components/Checkbox/CheckboxBasicDesc.vue";
import CheckboxDisabledDesc from "../../components/Checkbox/CheckboxDisabledDesc.vue";
import CheckboxDisabled from "../../components/Checkbox/CheckboxDisabled.vue";
import CheckboxGroupBasic from "../../components/Checkbox/CheckboxGroupBasic.vue";
import CheckboxGroupBasicDesc from "../../components/Checkbox/CheckboxGroupBasicDesc.vue";
import CheckboxNum from "../../components/Checkbox/CheckboxNum.vue";
import CheckboxNumDesc from "../../components/Checkbox/CheckboxNumDesc.vue";
import CheckboxAll from "../../components/Checkbox/CheckboxAll.vue";
import CheckboxAllDesc from "../../components/Checkbox/CheckboxAllDesc.vue";
import CheckboxBorder from "../../components/Checkbox/CheckboxBorder.vue";
import CheckboxBorderDesc from "../../components/Checkbox/CheckboxBorderDesc.vue";

const CheckboxTitle = "Checkbox Attributes";
const CheckboxTheads = ["属性名", "说明", "类型", "默认值"];
const CheckboxBodyData = [
  [
    "v-model",
    "选中项绑定值",
    "<code>string</code> | <code>number</code> | <code>boolean</code>",
    "",
  ],
  [
    "label",
    "选中状态的值（只有在<code>checkbox-group</code> 或者绑定对象类型为<code>array</code>时有效）",
    "<code>string</code> |<code>number</code>  |<code>boolean</code> ",
    "",
  ],
  [
    "true-label",
    "选中时的值",
    "<code>string</code> |<code>number</code>",
    "",
  ],
  ["false-label", "没有选中时的值", "<code>string</code>|<code>number</code>",""],
  ["disabled", "是否禁用", "<code>boolean</code>", false],
  ["border", "是否显示边框", "boolean", false],
  ["size", "Checkbox 的尺寸", "'large' | 'default' | 'small'", ""],
  ["name", "	原生 name 属性", "<code>string</code>", ""],
  ["checked", "	当前是否勾选", "<code>boolean</code>", false],
  ["indeterminate", "	设置不确定状态，仅负责样式控制", "<code>boolean</code>", false],
  ["tabindex", "	输入框的 tabindex", "<code>string</code>|<code>number</code>", ""],
  ["id", "	input id", "<code>string</code>", ""],
];

const CheckboxEvent = "Checkbox Events"
const CheckboxEventTheads = ["事件名", "说明", "类型"];
const CheckboxEventBodyData = [["cahnge","当绑定值变化时触发的事件","Function"]]

const CheckboxSlots = "Checkbox Slots"
const CheckboxSlotsTheads =["插槽名","说明"]
const CheckboxSlotsBodyData =[["default","自定义默认内容"]]


const CheckboxGroupTitle = "CheckboxGroup Attributes";
const CheckboxGroupTheads = ["属性名", "说明", "类型", "默认值"];
const CheckboxGroupBodyData = [
  [
    "v-model",
    "绑定值",
    "<code>Array</code>",
    "[]",
  ],
  [
    "size",
    "	多选框组尺寸",
    "<code>'large' | 'default' | 'small'</code> ",
    "",
  ],
  [
    "disabled",
    "	是否禁用",
    "<code>boolean</code>",
    false,
  ],
  ["min", "可被勾选的 checkbox 的最小数量", "<code>number</code>",""],
  ["max", "可被勾选的 checkbox 的最大数量", "<code>number</code>", ""]
];

const CheckboxGroupSlotsTitle="CheckboxGroup Slots"
const CheckboxGroupSlotsTheads=["插槽名","说明","子标签"]
const CheckboxGroupSlotsBodyData=[["default","自定义默认内容","Checkbox"]]

</script>

<style>
</style>