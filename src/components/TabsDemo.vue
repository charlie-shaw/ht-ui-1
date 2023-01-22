<template>
  <h2>Tabs</h2>
  <h2>示例1</h2>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components:{Tab,Tabs}
}
</script>

<style>

</style>