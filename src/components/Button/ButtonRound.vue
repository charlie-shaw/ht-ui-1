<template>
    <h2>圆角按钮</h2>
    <ht-button theme="text" type="primary" :round="true">文本圆角按钮</ht-button>
    <ht-button theme="button" type="success" :round="true">Success</ht-button>
    <ht-button theme="button" type="warning" :round="true">Warning</ht-button>
    <ht-button theme="button" type="danger" :round="true">Danger</ht-button>
  </template>
  
  <script lang="ts">
  import htButton from '../../lib/Button.vue'
  export default {
      components:{htButton}
  }
  </script>
  
  <style>
  
  </style>