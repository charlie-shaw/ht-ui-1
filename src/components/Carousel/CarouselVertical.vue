<demo>
    垂直排列
</demo>
<template>
  <p class="text-center demonstration">normal vertical layout</p>
  <ht-carousel
    height="200px"
    v-model:initialIndex="demo1"
    direction="vertical"
    :autoplay="false"
  >
    <ht-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ht-carousel-item>
  </ht-carousel>
  <p class="text-center demonstration">card vertical layout</p>
  <ht-carousel
    height="400px"
    direction="vertical"
    type="card"
    :autoplay="false"
    v-model:initialIndex="demo2"
  >
    <ht-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </ht-carousel-item>
  </ht-carousel>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const demo1 = ref(1);
const demo2 = ref(1);
</script>
  <style scoped>
.text-center {
  text-align: center;
  padding: 20px;
}
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
  