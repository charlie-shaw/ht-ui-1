<template>
    <h2>开关背景颜色</h2>
    <ht-switch v-model="value1"
    active-color="#FFC0CB"
    inactive-color="#ADD8E6"
    ></ht-switch>
    <ht-switch v-model="value2" 
    style="--switch-on-color: #13ce66; --switch-off-color: #ff4949"
    ></ht-switch>
  </template>
  
  <script lang="ts">
  import {ref} from 'vue'
  import htSwitch from '../../lib/Switch.vue' 
  export default {
      components:{htSwitch},
      setup(){
          const value1 = ref(true)
          const value2 = ref(true)
          return{value1,value2}
      }
  }
  </script>
  
  <style>
  
  </style>