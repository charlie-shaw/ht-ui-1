<demo>
尺寸
</demo>
<template>
  <div class="demo-input-size">
    <ht-input v-model="input1" size="large" placeholder="Please Input" />
    <ht-input v-model="input2" placeholder="Please Input" />
    <ht-input v-model="input3" size="small" placeholder="Please Input" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
</script>
<style lang="scss">
    .demo-input-size{
        display: flex;
        align-items: center;
        >div{
            margin-right: 25px;
        }
    }

</style>
