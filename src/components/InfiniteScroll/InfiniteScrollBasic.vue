<demo>
基础用法
</demo>
<template>
  <div :infinite-scroll-immediate="true" :infinite-scroll-distance="200" :infinite-scroll-delay="300" v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(5)
const load = () => {
  count.value += 2
}
</script>

<style>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--ht-color-primary-light-3);
  margin: 10px;
  color: var(--ht-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
