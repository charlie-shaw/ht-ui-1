<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lights"></use>
        </svg>
      </router-link>
    </div>
    <div class="menu">
      <router-link to="/doc/intro">文档</router-link>
      <a href="https://github.com/1186549058/ht-ui-1" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-GitHub"></use>
        </svg>
      </a>
    </div>
    <span v-if="toggleMenu" class="toggleAside" @click="toggleAside">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhankaicaidan"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue";
const props = defineProps({
  toggleMenu: {
    type: Boolean,
    default: false,
  },
});
const asideVisible = inject<Ref<boolean>>("xxx");
// console.log(asideVisible.value);
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.topnav {
  height: 60px;
  position: relative;
  align-items: center;
  z-index: 100;
  justify-content: center;
  background-color: white;
  display: flex;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-right: none;
  border-left: none;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      width: 30px;
      height: 30px;
      color: #b7e9e6;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    svg {
      width: 30px;
      height: 30px;
    }
    > li {
      list-style: none;
      margin: 0 1em;
    }
    a {
      color: var(--text--color);
      text-decoration: none;
      margin-left: 10px;
    }
  }
  > .toggleAside {
    cursor: pointer;
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media screen and (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>