<template>
  <div class="doc">
    <Teleport to="body">
      <Transition name="overlay">
        <div
          v-show="asideVisible"
          class="overlay"
          @click="onOverlayClick"
        ></div>
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
        <div v-for="item in navList" :key="item.type">
          <h2>{{ item.type }}</h2>
          <ol>
            <li v-for="i in item.links" :key="i.path">
              <router-link :to="i.path">{{ i.name }}</router-link>
            </li>
          </ol>
        </div>
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
const navList = [
  {
    type: "基础组件",
    links: [
      { name: "Button 按钮", path: "/doc/button" },
      { name: "Container 容器", path: "/doc/container" },
    ],
  },
  {
    type: "表单组件",
    links: [
      { name: "Switch 开关", path: "/doc/switch" },
      { name: "Input 文本框", path: "/doc/input" },
      { name: "InputNumber 数字框", path: "/doc/inputNumber" },
      { name: "Radio 单选按钮", path: "/doc/radio" },
      { name: "Checkbox 多选按钮", path: "/doc/checkbox" },
    ],
  },
  {
    type: "数据展示",
    links: [
      { name: "Infinite Scroll无限滚动", path: "/doc/infinite-scroll" },
      { name: "Carousel 走马灯", path: "/doc/carousel" },
    ],
  },
  {
    type: "反馈组件",
    links: [
      { name: "Dialog 弹窗", path: "/doc/dialog" },
      { name: "Message 消息提示", path: "/doc/message" },
    ],
  },
  {
    type: "导航",
    links: [{ name: "Tabs 标签页", path: "/doc/tabs" }],
  },
];
const asideVisible = inject("xxx");
const onOverlayClick = (e) => {
  asideVisible.value = !asideVisible.value;
};
</script>

<style lang="scss" scoped>
@import "../lib/global.scss";
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
  z-index: 99999;
  width: var(--vp-sidebar-width-small);
  background-color: white;
  padding: 38px 32px 0;
  flex-shrink: 0;
  overflow: auto;
  padding-bottom: 65px;
  ol {
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
  transform: translateX(-320px);
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
    @media screen and (max-width: 500px) {
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
  z-index: 99;
  @media screen and (min-width: 500px) {
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