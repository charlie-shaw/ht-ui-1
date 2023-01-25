<template>
  <div style="margin-bottom: 10px;">
    <ht-button>Default</ht-button>
    <ht-button type="primary">Primary</ht-button>
    <ht-button type="success">Success</ht-button>
    <ht-button type="warning">Warning</ht-button>
    <ht-button type="danger">Danger</ht-button>
  </div>

  <ht-button round>Default</ht-button>
  <ht-button type="primary" round>Primary</ht-button>
  <ht-button type="success" round>Success</ht-button>
  <ht-button type="warning" round>Warning</ht-button>
  <ht-button type="danger" round>Danger</ht-button>
</template>
  
  <script lang="ts">
import htButton from "../../lib/Button.vue";
export default {
  components: { htButton },
};
</script>
  
  <style>
</style>