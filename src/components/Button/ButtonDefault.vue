<template>
    <h2>基础用法</h2>
    <ht-button  >Default</ht-button>
    <ht-button  type="primary">Primary</ht-button>
    <ht-button  type="success">Success</ht-button>
    <ht-button  type="warning">Warning</ht-button>
    <ht-button  type="danger">Danger</ht-button>
    <h2>禁用按钮</h2>
    <ht-button  :disabled="true">Default</ht-button>
    <ht-button  type="primary" :disabled="true">Primary</ht-button>
    <ht-button  type="success" :disabled="true">Success</ht-button>
    <ht-button  type="warning" :disabled="true">Warning</ht-button>
    <ht-button  type="danger" :disabled="true">Danger</ht-button>
  </template>
  
  <script lang="ts">
  import htButton from '../../lib/Button.vue'
  export default {
      components:{htButton}
  }
  </script>
  
  <style>
  
  </style>