<template>
    <h2>调整尺寸</h2>
    <ht-button  size="large">Large</ht-button>
    <ht-button   size="default">Default</ht-button>
    <ht-button  size="small">Small</ht-button>
    <h2>加载状态按钮</h2>
    <ht-button  :loading="true" type="primary">Loading</ht-button>

  </template>
  
  <script lang="ts">
  import htButton from '../../lib/Button.vue'
  export default {
      components:{htButton}
  }
  </script>
  
  <style>
  
  </style>