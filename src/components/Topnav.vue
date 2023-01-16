<template>
  <div class="topnav">
    <div class="logo">Logo</div>
    <div class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </div>
    <span class="toggleAside"  @click="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import { inject, Ref} from 'vue';
export default {
    setup(){
       const asideVisible =  inject<Ref<boolean>>('xxx')
       console.log(asideVisible.value);
       const toggleAside = ()=>{
        
         asideVisible.value =!asideVisible.value
       }
       return{toggleAside}
    }
};
</script>

<style lang="scss" scoped>
.topnav {
  height: 60px;
  position: relative;
  align-items: center;
  z-index: 10;
  justify-content: center;
  background-color: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      list-style: none;
      margin: 0 1em;
    }
  }
  >.toggleAside{
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
    @media screen and (max-width:500px) {
      >.menu{display: none;} 
      >.logo{margin: 0 auto;} 
      >.toggleAside{
        display: inline-block;
      }
    }
}
</style>