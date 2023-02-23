<demo>
卡片风格的标签
</demo>
<template>
  <ht-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <ht-tab-pane label="User" name="first" >User</ht-tab-pane>
    <ht-tab-pane label="Config" name="second">Config</ht-tab-pane>
    <ht-tab-pane label="Role" name="third">Role</ht-tab-pane>
    <ht-tab-pane label="Task" name="fourth">Task</ht-tab-pane>
  </ht-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
