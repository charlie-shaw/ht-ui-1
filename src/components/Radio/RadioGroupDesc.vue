<template>
    <desc-component>
      <h4>适用于在多个互斥的选项中选择的场景</h4>
      <p class="row">
        结合<code>el-radio-group</code> 元素和子元素<code>el-radio</code> 可以实现单选组， 为 <code>el-radio-group</code> 绑定 <code>v-model</code> ，再为 每一个 <code>el-radio</code> 设置好 <code>label</code> 属性即可， 另外，还可以通过 <code>change</code> 事件来响应变化，它会传入一个参数 <code>value</code> 来表示改变之后的值。
      </p>
    </desc-component>
  </template>
    
    <script>
  export default {
  };
  </script>
    
    <style>
  </style>