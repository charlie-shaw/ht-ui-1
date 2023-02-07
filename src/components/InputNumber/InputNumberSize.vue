<demo>
不同的输入框尺寸
</demo>
<template>
  <div class="box">
    <ht-input-number v-model="num1" size="large" />
    <ht-input-number v-model="num2" />
    <ht-input-number v-model="num3" size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const num1 = ref(1);
const num2 = ref(2);
const num3 = ref(3);
</script>
<style lang="scss">
  .box{
    >*{
      margin-right: 20px;
    }
  }
</style>
