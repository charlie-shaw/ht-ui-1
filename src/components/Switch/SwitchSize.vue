<template>
  <h2>尺寸</h2>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="large"
  ></ht-switch>
  <br>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
  ></ht-switch>
  <br>
  <ht-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    size="small"
  ></ht-switch>
</template>
  
  <script lang="ts">
import { ref } from "vue";
import htSwitch from "../../lib/Switch.vue";
export default {
  components: { htSwitch },
  setup() {
    const value1 = ref(true);
    return { value1 };
  },
};
</script>
  
  <style>
</style>