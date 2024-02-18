<demo>
  基本使用
</demo>
<template>
  <ht-virtual-list :height="300">
    <template v-for="(item, index) in items" :key="item.id">
      <div class="list-item" :style="{ height: item.height + 'px' }">
        {{ item.content }}
      </div>
    </template>
  </ht-virtual-list>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  // 假设你有大量的列表项，每个项有不同的高度
  { id: 1, content: "Item 1", height: 20 },
  { id: 2, content: "Item 2", height: 40 },
  { id: 3, content: "Item 2", height: 80 },
  { id: 4, content: "Item 2", height: 100 },
  { id: 5, content: "Item 2", height: 60 },
  { id: 6, content: "Item 2", height: 70 },
  // ...
]);
</script>

<style>
.list-item {
  border-bottom: 1px solid #eee;
}
</style>
