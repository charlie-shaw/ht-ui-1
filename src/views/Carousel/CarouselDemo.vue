<template>
  <h1>Carousel 走马灯</h1>
  <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
  <!-- 基本使用 -->
  <Demo :component="CarouselBasic" :descComponent="CarouselBasicDescVue"></Demo>
  <!-- 卡片模式 -->
  <Demo :component="CarouselCard" :descComponent="CarouselCardDesc"></Demo>
  <!-- 垂直排列 -->
  <Demo
    :component="CarouselVertical"
    :descComponent="CarouselVerticalDesc"
  ></Demo>
  <!-- Api属性 -->
  <Api
    :title="CarouselTitle"
    :theads="CarouselTheads"
    :bodyData="CarouselBodyData"
  ></Api>
  <!-- 事件 -->
  <Api
    :title="CarouselEventTitle"
    :theads="CarouselEventlTheads"
    :bodyData="CarouselEventBodyData"
  ></Api>
  <!-- 方法 -->
  <Api
    :title="CarouselMethodTitle"
    :theads="CarouselMethodlTheads"
    :bodyData="CarouselMethodBodyData"
  ></Api>
</template>
  
  <script lang="ts" setup>
import CarouselBasic from "../../components/Carousel/CarouselBasic.vue";
import CarouselBasicDescVue from "../../components/Carousel/CarouselBasicDesc.vue";
import CarouselCard from "../../components/Carousel/CarouselCard.vue";
import CarouselCardDesc from "../../components/Carousel/CarouselCardDesc.vue";
import CarouselVertical from "../../components/Carousel/CarouselVertical.vue";
import CarouselVerticalDesc from "../../components/Carousel/CarouselVerticalDesc.vue";
import ButtonLink from "../../components/Button/ButtonLink.vue";
const CarouselTitle = "Carousel Attributes";
const CarouselTheads = ["属性名", "说明", "类型", "可选值", "默认值"];
const CarouselBodyData = [
  ["height", "carousel 的高度", "string", "", ""],
  ["initial-index", "初始状态激活的幻灯片的索引，从 0 开始", "number", "", "0"],
  ["trigger", "指示器的触发方式", "string", "hover/click", "hover"],
  ["autoplay", "是否自动切换", "boolean", "", "true"],
  ["interval", "自动切换的时间间隔，单位为毫秒	", "number", "", "3000"],
  ["loop", "是否循环显示		", "boolean", "", "true"],
  ["type", "carousel 的类型", "string", "card", ""],
  ["direction", "展示的方向	", "string", "horizontal/vertical", "horizontal"],
];

const CarouselEventTitle = "Carousel Events";
const CarouselEventlTheads = ["事件名", "说明", "回调参数"];
const CarouselEventBodyData = [
  ["change", "幻灯片切换时触发	", "目前激活的幻灯片的索引，原幻灯片的索引"],
];

const CarouselMethodTitle = "Carousel Methods";
const CarouselMethodlTheads = ["方法名", "说明", "参数"];
const CarouselMethodBodyData = [
  ["setActiveItem", "手动切换幻灯片		", "需要切换的幻灯片的索引，从 0 开始"],
  ["prev", "切换至上一张幻灯片", ""],
  ["next", "切换至下一张幻灯片", ""],
];
</script>
  
  <style>
</style>