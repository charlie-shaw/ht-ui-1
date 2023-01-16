<template>
  <button>
    <span></span>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  button{
    height: $h;
    widows: $h*2;
    border: none;
    background: blue;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top:2px;
    left: 2px;
    height: $h2;
    widows: $h2;
    background: white;
    border-radius: $h2/2;
  }
</style>