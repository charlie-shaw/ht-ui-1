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
</template>

<script lang="ts">
import ButtonLink from "../../components/Button/ButtonLink.vue";
import ButtonLinkDesc from "../../components/Button/ButtonLinkDesc.vue";
import ButtonDefault from "../../components/Button/ButtonDefault.vue";
import ButtonText from "../../components/Button/ButtonText.vue";
import ButtonTextDesc from "../../components/Button/ButtonTextDesc.vue";
import ButtonRound from "../../components/Button/ButtonRound.vue";
import ButtonSize from "../../components/Button/ButtonSize.vue";
import ButtonSizeDesc from "../../components/Button/ButtonSizeDesc.vue";
import Demo from "../../components/common/Demo.vue";
import ButtonDefaultDesc from "../../components/Button/ButtonDefaultDesc.vue";
import ButtonDisabled from "../../components/Button/ButtonDisabled.vue";
import ButtonDisabledDesc from "../../components/Button/ButtonDisabledDesc.vue";
import ButtonLoading from "../../components/Button/ButtonLoading.vue";
import ButtonLoadingDesc from "../../components/Button/ButtonLoadingDesc.vue";
import ButtonColor from "../../components/Button/ButtonColor.vue";
import ButtonColorDesc from "../../components/Button/ButtonColorDesc.vue";
export default {
  components: {
    ButtonLink,
    ButtonDefault,
    ButtonText,
    ButtonRound,
    ButtonSize,
    ButtonSizeDesc,
    Demo,
    ButtonDefaultDesc,
    ButtonDisabled,
    ButtonDisabledDesc,
    ButtonTextDesc,
    ButtonLoading,
    ButtonLoadingDesc,
    ButtonColor,
    ButtonColorDesc,
  },
  setup() {
    console.log(ButtonDefault);

    return {
      ButtonDefault,
      ButtonDefaultDesc,
      ButtonDisabled,
      ButtonDisabledDesc,
      ButtonLink,
      ButtonLinkDesc,
      ButtonTextDesc,
      ButtonText,
      ButtonLoading,
      ButtonLoadingDesc,
      ButtonSize,
      ButtonSizeDesc,
      ButtonColor,
      ButtonColorDesc,
    };
  },
};
</script>

<style>
</style>