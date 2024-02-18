<template>
  <div class="ht-virtual-list-container" :style="{ height: height + 'px' }">
    <div ref="list" class="ht-virtual-list">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="ht-virtual-list">
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
import { getSlotVnode } from "../../utils/types.ts";
const props = defineProps({
  height: {
    type: Number,
    default: 100,
  },
});
const app = getCurrentInstance();
const list = ref(null);
onMounted(() => {
  console.log(list.value);
  console.log(getSlotVnode(app.slots.default()));
});
</script>

<style lang="scss" scoped>
.ht-virtual-list-container {
  overflow: auto;
}
</style>
