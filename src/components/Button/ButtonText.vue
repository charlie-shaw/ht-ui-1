<template>
    <h2>文字按钮</h2>
    <ht-button theme="text" >Plain</ht-button>
    <ht-button theme="text" type="primary">Primary</ht-button>
    <ht-button theme="text" type="success">Success</ht-button>
    <ht-button theme="text" type="warning">Warning</ht-button>
    <ht-button theme="text" type="danger">Danger</ht-button>
    <h2>禁用文字按钮</h2>
    <ht-button theme="text" :disabled="true">Plain</ht-button>
    <ht-button theme="text" type="primary" :disabled="true">Primary</ht-button>
    <ht-button theme="text" type="success" :disabled="true">Success</ht-button>
    <ht-button theme="text" type="warning" :disabled="true">Warning</ht-button>
    <ht-button theme="text" type="danger" :disabled="true">Danger</ht-button>
  </template>
  
  <script lang="ts">
  import htButton from '../../lib/Button.vue'
  export default {
      components:{htButton}
  }
  </script>
  
  <style>
  
  </style>