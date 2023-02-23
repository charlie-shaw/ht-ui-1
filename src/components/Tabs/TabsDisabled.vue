<demo>
  disabled禁用
</demo>
<template>
  <ht-tabs v-model="activeName" class="demo-tabs">
    <ht-tab-pane label="User" name="first" :disabled="true">User</ht-tab-pane>
    <ht-tab-pane label="Config" name="second">Config</ht-tab-pane>
    <ht-tab-pane label="Role" name="third">Role</ht-tab-pane>
    <ht-tab-pane label="Task" name="fourth" :disabled="true">Task</ht-tab-pane>
  </ht-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

let activeName = ref('first')
</script>
<style>
.demo-tabs > .ht-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
