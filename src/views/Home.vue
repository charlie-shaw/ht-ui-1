<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>CharlieUI</h1>
      <h2>基于vue3，面向开发者的组件库</h2>
      <p class="actions">
        <a href="https://github.com/1186549058/ht-ui-1">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <div class="message">
            <h3>基于 Vue 3</h3>
            <p>采用了 Vue 3 compositionAPI</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <div class="message">
            <h3>基于 TypeScript</h3>
            <p>源代码使用了TypeScript书写（非严格检查）</p>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-read"></use>
          </svg>
          <div class="message">
            <h3>代码易读</h3>
            <p>每个组件的源代码都及其简洁</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  margin-top: 50px;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li{
      width: 100%;
      height:70px ;
      line-height: 1.5;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      h3{
        font-size: 28px;
      }
      .message{
        margin-left: 10px;
        p{
          margin: 10px 0;
        }
      }
    }
  }
  svg{
    width: 64px;
    height: 64px;
  }
  @media screen and (min-width:800px) {
    ul>li{
      width: 50%;
    }
  }
  @media screen and (min-width:1200px) {
    ul>li{
      width: 33.33333%;
    }
  }
}
.banner {
  padding: 50px  0 100px ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--text--color);
  // background: lightgreen;
  > .actions {
    padding: 8px 0;
    margin: 20px 0;
    a {
      margin: 0 8px;
      background: var(--link-bg-color);
      color: var(--link-font-color);
      display: inline-block;
      // $h: 28px;
      // line-height: $h;
      border-radius: 20px;
      padding: 8px 24px;
    }
  }
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>