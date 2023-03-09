<template>
  <desc-component>
    <p class="row">
      适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
    </p>
    <p class="row">
      在 <code>ht-checkbox</code> 元素中定义 <code>v-model</code> 绑定变量，单一的 <code>checkbox</code>
      中，默认绑定变量的值会是 <code>Boolean</code> ，选中为 <code>true</code> 。 在 <code>ht-checkbox</code>
      组件中， <code>label</code> 是选择框的值。 如果该组件下没有被传入内容，那么 <code>label</code>
      将会作为 <code>checkbox</code> 按钮后的介绍。 <code>label</code> 也与数组中的元素值相对应。
      如果指定的值存在于数组中，就处于选择状态，反之亦然。
    </p>
  </desc-component>
</template>

<script lang="ts" setup>
</script>