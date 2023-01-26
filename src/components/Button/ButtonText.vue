<demo>
    文字按钮
</demo>
<template>
    <ht-button theme="text" >Plain</ht-button>
    <ht-button theme="text" type="primary">Primary</ht-button>
    <ht-button theme="text" type="success">Success</ht-button>
    <ht-button theme="text" type="warning">Warning</ht-button>
    <ht-button theme="text" type="danger">Danger</ht-button>
    <h3 style="margin: 10px;">禁用文字按钮</h3>
    <ht-button theme="text" disabled>Plain</ht-button>
    <ht-button theme="text" type="primary" disabled>Primary</ht-button>
    <ht-button theme="text" type="success" disabled>Success</ht-button>
    <ht-button theme="text" type="warning" disabled>Warning</ht-button>
    <ht-button theme="text" type="danger" disabled>Danger</ht-button>

    <h3 style="margin: 10px;">背景色文字按钮</h3>
    <ht-button theme="text" bg="#F0F2F5">Plain</ht-button>
    <ht-button theme="text" type="primary" bg="#F0F2F5">Primary</ht-button>
    <ht-button theme="text" type="success" bg="#F0F2F5">Success</ht-button>
    <ht-button theme="text" type="warning" bg="#F0F2F5">Warning</ht-button>
    <ht-button theme="text" type="danger" bg="#F0F2F5">Danger</ht-button>

    
    
</template>
  
  <script lang="ts">
  import htButton from '../../lib/Button.vue'
  export default {
      components:{htButton}
  }
  </script>
  
  <style>
  
  </style>