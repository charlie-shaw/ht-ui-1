<template>
  <div class="doc">
    <Teleport to="body">
      <Transition name="overlay">
        <div v-if="asideVisible" class="overlay"></div>
      </Transition>
    </Teleport>
    <Topnav toggleMenu />
    <div class="content">
      <aside class="aside" ref="aside" :class="{ open: asideVisible }">
        <h2>基础</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/get-started">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
          <li>
            <router-link to="/doc/messagebox">messageBox</router-link>
          </li>
          <li>
            <router-link to="/doc/message">Message</router-link>
          </li>
          <li>
            <router-link to="/doc/container">Container</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input</router-link>
          </li>
          <li>
            <router-link to="/doc/inputNumber">inputNumber</router-link>
          </li>
        </ol>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Topnav from "../components/Topnav.vue";
    const asideVisible = inject("xxx");
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
.router-link-active {
  background-color: rgba(64, 158, 255, 0.1);
  color: var(--ht-color-primary);
  font-weight: bold;
}
.doc {
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .topnav {
    flex-shrink: 0;
  }
}
li {
  list-style: none;
}
.aside {
  z-index: 99;
  width: var(--vp-sidebar-width-small);
  background-color: white;
  padding: 38px 32px 0;
  flex-shrink: 0;
  > ol {
    margin: 0;
    padding: 0;
    > li {
      padding: 4px 0;
      a {
        font-size: 13px;
        border-radius: 12px;
        padding: 10px 16px;
        display: block;
        transition: all 0.25s;
        &:hover {
          color: var(--ht-color-primary);
        }
      }
    }
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 60px;
    left: 0;
    height: 100%;
    width: var(--vp-sidebar-width-mobile);
  }
  &.open {
    transform: translateX(0);
  }
  transform: translateX(calc(0px - var(--vp-sidebar-width-mobile)));
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}
.content {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  > .main {
    flex-grow: 1;
    padding: 20px 64px 20px 20px;
    height: 100%;
    overflow: auto;
    position: relative;
    @media screen and (max-width:500px) {
      padding: 20px;
    }
  }
}
.overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  @media screen and (min-width:500px){
    display: none;
  }
}
.overlay-enter-from {
  opacity: 0;
}
.overlay-enter-end {
  opacity: 1;
}
.overlay-enter-active {
  transition: all 0.25s;
}
.overlay-leave-from {
  opacity: 1;
}
.overlay-leave-end {
  opacity: 0;
}
.overlay-leave-active {
  transition: all 0.25s;
}
</style>