<template>
  <button :class="{checked:checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup(){
        const checked = ref(false)
        const toggle = ()=>{
            checked.value = !checked.value
            console.log(checked);
            
        }
        return {checked,toggle}
    }
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: rgb(255, 73, 73);
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: all 0.3s;
  } 
  button.checked>span{
    left: calc(100% - #{$h2} - 2px);
  }
  button.checked{
    background: rgb(19, 206, 102);
  }
</style>