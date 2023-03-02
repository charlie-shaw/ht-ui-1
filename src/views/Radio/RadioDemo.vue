<template>
  <!-- 基础用法 -->
  <Demo :component="RadioBasic" :desc-component="RadioBasicDesc"></Demo>
  <!-- 禁用Demo -->
  <Demo :component="RadioDisabled" :desc-component="RadioDisabledDesc"></Demo>
  <!-- 单选框组 -->
  <Demo :component="RadioGroup" :desc-component="RadioGroupDesc"></Demo>
  <!-- 带有边框 -->
  <Demo :component="RadioBorder" :desc-component="RadioBorderDesc"></Demo>

  <!-- Api属性 -->
  <!-- Radio API -->
  <Api
    :title="RadioTitle"
    :theads="RadioTheads"
    :bodyData="RadioBodyData"
  ></Api>
  <!-- RadioEvent 单选框事件 -->
  <Api
    :title="RadioEventTitle"
    :theads="RadioEventTheads"
    :bodyData="RadioEventBodyData"
  ></Api>
  <!-- RadioSlot 插槽 -->
  <Api
    :title="RadioSlotTitle"
    :theads="RadioSlotTheads"
    :bodyData="RadioSlotBodyData"
  ></Api>

  <!-- RadioGroupAPI -->
  <Api
    :title="RadioGroupTitle"
    :theads="RadioGroupTheads"
    :bodyData="RadioGroupBodyData"
  ></Api>
  <!-- RadioGroup事件 -->
  <Api
    title="RadioGroup事件"
    :theads="RadioEventTheads"
    :bodyData="RadioEventBodyData"
  ></Api>
  <!-- RadioGroup插槽 -->
  <Api
    title="RadioGroup 插槽"
    :theads="RadioSlotTheads"
    :bodyData="RadioSlotBodyData"
  ></Api>

</template>

<script lang="ts" setup>
import RadioBasic from "../../components/Radio/RadioBasic.vue";
import RadioBasicDesc from "../../components/Radio/RadioBasicDesc.vue";
import RadioDisabled from "../../components/Radio/RadioDisabled.vue";
import RadioDisabledDesc from "../../components/Radio/RadioDisabledDesc.vue";
import RadioGroup from "../../components/Radio/RadioGroup.vue";
import RadioGroupDesc from "../../components/Radio/RadioGroupDesc.vue";
import RadioBorder from "../../components/Radio/RadioBorder.vue";
import RadioBorderDesc from "../../components/Radio/RadioBorderDesc.vue";

const RadioTitle = "Radio属性";
const RadioTheads = ["属性名", "说明", "类型", "默认值"];
const RadioBodyData = [
  [
    "v-model",
    "选中项绑定值",
    "<code>string</code>/<code>number</code>/<code>boolean</code>",
    "",
  ],
  [
    "label",
    "单选框的值",
    "<code>string</code>/<code>number</code>/<code>boolean</code>",
    "",
  ],
  ["disabled", "是否禁用单选框", "<code>boolean</code> ", "false"],
  ["border", "是否显示边框", "<code>boolean</code>", "false"],
  ["size", "单选框的尺寸", "<code>'large'|'default'|'small'</code> ", ""],
  ["name", "原始 <code>name</code> 属性", "<code>string</code> ", ""],
];
const RadioEventTitle = "Radio事件";
const RadioEventTheads = ["事件名", "说明", "类型"];
const RadioEventBodyData = [
    [
        "change",
        "绑定值变化时触发的事件",
        "<code>Function</code>"
    ]
]

const RadioSlotTitle="Radio插槽";
const RadioSlotTheads = ["插槽名", "说明"];
const RadioSlotBodyData = [
    [
        "default",
        "自定义插槽内容"
    ]
]
const RadioGroupTitle = "RadioGroup属性";
const RadioGroupTheads = ["属性名", "说明", "类型", "默认值"];
const RadioGroupBodyData = [
  [
    "v-model",
    "绑定值",
    "<code>string</code>/<code>number</code>/<code>boolean</code>",
    "",
  ],
  [
    "size",
    "单选框按钮或边框按钮的大小",
    "<code>string</code>",
    "default",
  ],
  ["disabled", "是否禁用", "<code>boolean</code> ", "false"],
  ["name", "原始 <code>name</code> 属性", "<code>string</code> ", ""],
  ["id", "原始 <code>id</code> 属性", "<code>string</code> ", ""],
];
</script> 

<style>
</style>