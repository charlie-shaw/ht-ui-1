<demo>
    常见页面布局5
</demo>
<template>
    <ht-container>
      <ht-header>Header</ht-header>
      <ht-container>
        <ht-aside width="200px">Aside</ht-aside>
        <ht-container>
          <ht-main class="main">Main</ht-main>
          <ht-footer>Footer</ht-footer>
        </ht-container>
      </ht-container>
    </ht-container>
</template>


<style lang="scss" scoped>
.main{
    height: 150px;
}
</style>