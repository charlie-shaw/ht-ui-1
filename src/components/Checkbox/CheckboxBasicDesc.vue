<template>
  <desc-component>
    <p class="row">
      单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox
      按钮后的介绍
    </p>
    <p class="row">
      <code>checkbox-group</code> 元素能把多个 checkbox 管理为一组，只需要在 Group 中使用
      <code>v-model</code> 绑定 <code>Array</code> 类型的变量即可。 只有一个选项时的默认值类型为
      <code>Boolean</code> ，当选中时值为<code>true</code> 。<code>el-checkbox</code>
      标签中的内容将成为复选框按钮之后的描述。
    </p>
  </desc-component>
</template>

<script lang="ts" setup>
</script>