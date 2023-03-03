<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    // 页面的宽度
    const width = window.innerWidth;
    const height = window.innerHeight;
    // console.log(width, height);

    const asideVisible = ref(width <= 500 ? false : true);
    provide("xxx", asideVisible);
    router.afterEach(() => {
      if (width <= 500) {
        
        asideVisible.value = false;
        console.log(asideVisible.value);
        
      }
    });
  },
};
</script>
