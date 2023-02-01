<template>
  <h1>Button 按钮</h1>
  <!-- 基本使用 -->
  <Demo :component="ButtonDefault" :descComponent="ButtonDefaultDesc"></Demo>
  <!-- 禁用按钮 -->
  <Demo :component="ButtonDisabled" :descComponent="ButtonDisabledDesc"></Demo>
  <!-- 链接按钮 -->
  <Demo :component="ButtonLink" :descComponent="ButtonLinkDesc"></Demo>
  <!-- 文字按钮 -->
  <Demo :component="ButtonText" :descComponent="ButtonTextDesc"></Demo>
  <!-- 加载按钮 -->
  <Demo :component="ButtonLoading" :descComponent="ButtonLoadingDesc"></Demo>
  <!-- 按钮尺寸 -->
  <Demo :component="ButtonSize" :descComponent="ButtonSizeDesc"></Demo>
  <!-- 自定义按钮颜色 -->
  <Demo :component="ButtonColor" :descComponent="ButtonColorDesc"></Demo>
  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
</template>

<script lang="ts" setup>
import ButtonLink from "../../components/Button/ButtonLink.vue";
import ButtonLinkDesc from "../../components/Button/ButtonLinkDesc.vue";
import ButtonDefault from "../../components/Button/ButtonDefault.vue";
import ButtonText from "../../components/Button/ButtonText.vue";
import ButtonTextDesc from "../../components/Button/ButtonTextDesc.vue";
import ButtonRound from "../../components/Button/ButtonRound.vue";
import ButtonSize from "../../components/Button/ButtonSize.vue";
import ButtonSizeDesc from "../../components/Button/ButtonSizeDesc.vue";
import ButtonDefaultDesc from "../../components/Button/ButtonDefaultDesc.vue";
import ButtonDisabled from "../../components/Button/ButtonDisabled.vue";
import ButtonDisabledDesc from "../../components/Button/ButtonDisabledDesc.vue";
import ButtonLoading from "../../components/Button/ButtonLoading.vue";
import ButtonLoadingDesc from "../../components/Button/ButtonLoadingDesc.vue";
import ButtonColor from "../../components/Button/ButtonColor.vue";
import ButtonColorDesc from "../../components/Button/ButtonColorDesc.vue";
    const ApiTitle = "属性";
    const ApiTheads = ["属性名", "说明", "类型", "默认值"];
    const ApiBodyData = [
      ["size", "尺寸", "<code>large</code> | <code>default</code> | <code>small</code>", ""],
      ["theme", "设置按钮的类型", "<code>button</code> |<code>link</code>  |<code>text</code> ", '<code>button</code>'],
      [
        "type",
        "设置按钮的状态",
        "<code>default</code> |<code>primary</code> | <code>danger</code> | <code>warning</code> ",
        "<code>default</code>",
      ],
      [
        "disabled",
        "按钮是否为禁用状态",
        "<code>boolean</code>",
        false,
      ],
      ["loading", "是否为加载中状态", "<code>boolean</code>", false],
      ["color", "自定义按钮字体颜色", "String", ""],
      ["bg", "自定义按钮背景颜色", "String",  ""],
      ["round", "	是否为圆角按钮", "<code>boolean</code>",  false],
    ];
</script>

<style>
</style>