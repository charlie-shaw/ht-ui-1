<template>
  <button :class="{ checked: value }" @click="toggle">
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props,context) {
    const toggle = () => {
        context.emit('input',!props.value)
    };
    return {  toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: rgb(255, 73, 73);
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: all 0.3s;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button.checked {
  background: rgb(19, 206, 102);
}
</style>