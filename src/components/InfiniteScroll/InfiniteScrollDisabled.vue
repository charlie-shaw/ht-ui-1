<demo>
禁用加载
</demo>
<template>
  <div class="infinite-list-wrapper">
    <ul
      style="overflow: auto"
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
      <p v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const count = ref(10);
const loading = ref(false);
const noMore = computed(() => count.value >= 20);
const disabled = computed(() => loading.value || noMore.value);
const load = () => {
    loading.value = true;
    setTimeout(() => {
      count.value += 2;
      loading.value = false;
    }, 2000);
};
</script>

<style>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}

.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--ht-message-error-bgcolor);
  color: var(--ht-message-error-color);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
