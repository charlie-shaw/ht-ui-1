<template>
  <h1>虚拟列表</h1>
  <!-- 基本用法 -->
  <Demo :component="VirtualListBasic"></Demo>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VirtualListBasic from "../../components/VirtualList/VirtualListBasic.vue";
</script>
