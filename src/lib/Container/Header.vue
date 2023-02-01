<template>
  <header class="ht-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
    props:{
        height:{type:String,default:'60px'}
    }
}
</script>

<style>

</style>