<template>
  <article class="markdown-body" v-html="md">

  </article>
</template>

<script>
import md from '../../markdown/Intro.md'
export default {
    setup(){
        return{
            md
        }
    }
}
</script>

<style>

</style>