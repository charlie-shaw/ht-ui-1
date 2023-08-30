
<demo>
  基础用法
</demo>
<template>
  <div class="block text-center">
    <p class="demonstration">当切换的方式为hover时，默认(trigger:"hover")</p>
    <ht-carousel height="150px" v-model:initialIndex="demo1">
      <ht-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center">{{ item }}</h3>
      </ht-carousel-item>
    </ht-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <p class="demonstration">当切换的方式为click时</p>
    <ht-carousel trigger="click" height="150px" v-model:initialIndex="demo2">
      <ht-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center">{{ item }}</h3>
      </ht-carousel-item>
    </ht-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const demo1 = ref(0);
const demo2 = ref(0);
</script>
<style scoped>
.demonstration {
  padding: 10px;
}
.ht-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
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
