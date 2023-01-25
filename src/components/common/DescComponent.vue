<template>
  <p class="desc">
    <slot></slot>
  </p>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .desc{
  margin: 16px 0;
   code{
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    font-size: 14px;
    color: var(--code-font-color);
    background-color: var(--code-bg-color);
    font-family: var(--code-font-family);
   }
 }
</style>