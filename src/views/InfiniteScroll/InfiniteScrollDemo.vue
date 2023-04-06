<template>
<h1>Infinite Scroll 无限滚动</h1>
<p>滚动至底部时，加载更多数据</p>
  <!-- 基础用法 -->
  <Demo :component="InfiniteScrollBasic" :desc-component="InfiniteScrollBasicDesc"></Demo>
  <!-- 禁用状态 -->
  <Demo :component="InfiniteScrollDisabled" ></Demo>

  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>

</template>

<script lang="ts" setup>
import InfiniteScrollBasic from "../../components/InfiniteScroll/InfiniteScrollBasic.vue";
import InfiniteScrollDisabled from "../../components/InfiniteScroll/InfiniteScrollDisabled.vue";
import InfiniteScrollBasicDesc from "../../components/InfiniteScroll/InfiniteScrollBasicDesc.vue";
    const ApiTitle = "指令";
    const ApiTheads = ["属性", "说明", "类型", "可选值","默认值"];
    const ApiBodyData = [
      [
        "v-infinite-scroll",
        "滚动到底部时，加载更多数据",
        "function",
        "",
        ""
      ],
      [
        "infinite-scroll-disabled",
        "	是否禁用",
        "boolean",
        "",
        "false"
      ],
      [
        "infinite-scroll-delay",
        "节流时延，单位为ms",
        "number ",
        "",
        "200"
      ],
      [
        "infinite-scroll-distance",
        "	触发加载的距离阈值，单位为px",
        "number	",
        "",
        "0"
      ],
      [
        "infinite-scroll-immediate",
        "是否立即执行加载方法，以防初始状态下内容无法撑满容器。",
        "boolean",
        "",
        "true"
      ]
    ];
</script> 

<style>
</style>