<demo>
  尺寸
</demo>
<template>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="large"
  ></ht-switch>
  <br/>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
  ></ht-switch>
  <br/>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="small"
  ></ht-switch>
</template>
  
  <script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const value1 = ref(true);
    return { value1 };
  },
};
</script>