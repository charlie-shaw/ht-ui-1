<template>
  <div v-for="t,index in titles" :key="index">{{t}}</div>
  <component v-for="c,index in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props, ctx) {
        const defaults = ctx.slots.default()
        // defaults中是当前组件的所有子标签,包括元素html,或者vue组件
        defaults.forEach(tag=>{
            if(tag.type !== Tab){
                throw new Error('Tabs子组件必须是Tab')
            }
        })
        const titles = defaults.map(tag=>{
            return tag.props.title
        })
        
        return {defaults,titles}
        
    },
}
</script>

<style>

</style>