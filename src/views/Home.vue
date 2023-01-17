<template>
  <div>
    <Topnav/>
    <div class="banner">
        <h1>CharlieUI</h1>
        <h1>一个厉害的UI框架</h1>
        <p class="actions">
            <a href="https://github.com/1186549058/ht-ui-1">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components:{Topnav}
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
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
  &:hover {
    border-bottom: 1px solid;
  }
}
</style>