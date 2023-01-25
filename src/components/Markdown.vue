<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script>
import { ref } from 'vue';
export default {
    props:{
        path:{
            type:String,
            required:true
        }
    },
    setup(props,ctx){
        const content = ref(null)
        // import 异步导入
        import(props.path).then(res=>{
            content.value = res.default
        })
        return {content}
    }
};
</script>

<style>
</style>