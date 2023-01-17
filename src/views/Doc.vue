<template>
  <div class="doc">
    <Topnav />
    <div class="content">
      <aside class="aside" ref="aside" :class="{open:asideVisible}" >
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
        </ol>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script >
import { inject, onMounted, ref } from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  setup() {
    const asideVisible = inject("xxx");
    console.log(asideVisible.value);
    return {
      asideVisible,
    };
  },
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.doc{
  height: 100vh;
  display: flex;
  flex-direction: column;
  >.topnav{
        flex-shrink: 0;
  }
}
li {
  list-style: none;
}
.aside {
  z-index: 99;
  width: 150px;
  background-color: lightblue;
  padding: 16px;
  > ol {
    margin: 0;
    padding: 0;
    > li {
      padding: 4px 0;
    }
  }
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 60px;
    left: 0;
    height: 100%;
  }
  &.open{
    transform: translateX(0);
  }
  transform: translateX(-150px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}
.content {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  >.main{
    flex-grow: 1;
    padding: 15px;
    height: 100%;
    overflow: auto;
  }
}
</style>