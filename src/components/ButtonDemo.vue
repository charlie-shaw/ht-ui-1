<template>

  <h2>链接按钮</h2>
  <ht-button
  size="small"
  theme="link"
  type="success"
  >链接按钮</ht-button>
  <ht-button
  size="small"
  theme="link"
  type="primary"
  :disabled="true"
  >链接按钮</ht-button>
  <ht-button
  size="small"
  theme="link"
  type="danger"
  >链接按钮</ht-button>
  <ht-button
  size="small"
  theme="link"
  type="warning"
  >链接按钮</ht-button>









  <h2>基本按钮</h2>

  <ht-button 
  theme="button"
  >Default</ht-button>
  <ht-button 
  theme="button"
  type="primary"
  >Primary</ht-button>
  <ht-button 
  theme="button"
  type="success"
  >Success</ht-button>
  <ht-button 
  theme="button"
  type="warning"
  >Warning</ht-button>
  <ht-button 
  theme="button"
  type="danger"
  :round="true"
  >Danger</ht-button>



  <h3>文字按钮</h3>
  <ht-button 
  theme="text"
  type="default"
  >Plain</ht-button>
  <ht-button 
  theme="text"
  type="primary"
  >Primary</ht-button>
  <ht-button 
  theme="text"
  type="success"
  >Success</ht-button>
  <ht-button 
  theme="text"
  type="warning"
  >Warning</ht-button>
  <ht-button 
  theme="text"
  type="danger"
  :round="true"
  :disabled="true"
  >Danger</ht-button>

</template>

<script lang="ts">
import htButton from '../lib/Button.vue'
export default {
  components:{htButton},
  setup(){
    const onClick = ()=>{
      console.log('hi');
      
    }
    return{onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>