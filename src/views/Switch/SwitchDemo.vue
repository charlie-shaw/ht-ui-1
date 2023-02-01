<template>
  <h1>Switch 开关</h1>
  <!-- 基本用法 -->
  <Demo :component="SwitchDefault" :desc-component="SwitchDefaultDesc"></Demo>
  <!-- 尺寸 -->
  <Demo :component="SwitchSize" :desc-component="SwitchSizeDesc"></Demo>
  <!-- 文字描述 -->
  <Demo :component="SwitchText" :desc-component="SwitchTextDesc"></Demo>
  <!-- 禁用状态 -->
  <Demo :component="SwitchDisabled" :desc-component="SwitchDisabledDesc"></Demo>
  <!-- Loading状态 -->
  <Demo :component="SwitchLoading" :desc-component="SwitchLoadingDesc"></Demo>
  <!-- 阻止切换 -->
  <Demo
    :component="SwitchBeforeChange"
    :desc-component="SwitchBeforeChangeDesc"
  ></Demo>

  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
  <!-- Api属性 -->
  <Api :title="event" :theads="eventTheades" :bodyData="eventBodyData"></Api>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SwitchDefault from "../../components/Switch/SwitchDefault.vue";
import SwitchDefaultDesc from "../../components/Switch/SwitchDefaultDesc.vue";
import SwitchSize from "../../components/Switch/SwitchSize.vue";
import SwitchSizeDesc from "../../components/Switch/SwitchSizeDesc.vue";
import SwitchText from "../../components/Switch/SwitchText.vue";
import SwitchTextDesc from "../../components/Switch/SwitchTextDesc.vue";
import SwitchDisabled from "../../components/Switch/SwitchDisabled.vue";
import SwitchDisabledDesc from "../../components/Switch/SwitchDisabledDesc.vue";
import SwitchLoading from "../../components/Switch/SwitchLoading.vue";
import SwitchLoadingDesc from "../../components/Switch/SwitchLoadingDesc.vue";
import SwitchBeforeChange from "../../components/Switch/SwitchBeforeChange.vue";
import SwitchBeforeChangeDesc from "../../components/Switch/SwitchBeforeChangeDesc.vue";
    const ApiTitle = "属性";
    const ApiTheads = ["属性名", "说明", "类型", "可选值", "默认值"];
    const ApiBodyData = [
      ["v-model", "绑定值", "boolean", "", ""],
      ["disabled", "控件是否禁用", "boolean", "", false],
      [
        "active-color",
        "控件为<code>on</code>时的背景颜色",
        "String",
        "rgb/hsl/16进制",
        "#409EFF",
      ],
      [
        "inactive-color",
        "控件为<code>off</code>时的背景颜色",
        "String",
        "rgb/hsl/16进制",
        "#DCDFE6",
      ],
      ["active-text", "控件为<code>on</code>时的text内容", "String", "", ""],
      ["inactive-text", "控件为<code>off</code>时的text内容", "String", "", ""],
      ["size", "switch 的大小", "String", "large / default / small", ""],
      ["width", "switch 的宽度", "String", "", "20px"],
      ["loading", "是否显示加载中", "boolean", "", false],
      [
        "before-change",
        "switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换",
        "() => Promise<boolean> | boolean",
        "",
        "",
      ],
    ];
    const event = "事件";
    const eventTheades = ["事件名", "说明", "回调参数"];
    const eventBodyData = [
      ["change", "switch状态发生变化时的回调函数", "val,新状态的值"],
    ];
</script>
