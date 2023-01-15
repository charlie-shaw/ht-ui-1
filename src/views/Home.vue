<template>
  <div>
    <div class="topnav">
        <div class="logo">Logo</div>
        <div class="menu">
          <li>菜单1</li>
          <li>菜单2</li>
        </div>
    </div>
    <div class="banner">
        <h1>CharlieUI</h1>
        <h1>一个厉害的UI框架</h1>
        <p class="actions">
            <a>GitHub</a>
            <a>开始</a>
        </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.topnav{
  background-color: pink;
  display: flex;
  padding: 16px;
  >.logo{
    max-width: 6em;
    margin-right: auto;
  }
  >.menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li{
      margin: 0 1em;
    }
  }
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