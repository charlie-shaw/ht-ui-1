<demo>
    卡片模式
</demo>
<template>
  <ht-carousel
    :interval="4000"
    v-model:initialIndex="demo1"
    type="card"
    height="200px"
  >
    <ht-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ht-carousel-item>
  </ht-carousel>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const demo1 = ref(1);
</script>
  <style scoped>
.ht-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.ht-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.ht-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
  