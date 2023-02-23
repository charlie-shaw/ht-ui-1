<template>
  <div class="ht-tab-pane-wrap">
    <div class="ht-tab-pane--title">
      <slot name="label">
      </slot>
    </div>
    <slot>{{ label }}</slot>
  </div>
</template>

<script setup>
let props = defineProps({
  label: { type: String },
  name: { type: [String,Number] },
  disabled:{type:Boolean,default:false}
});
</script>

<style lang="scss">
.ht-tab-pane-wrap {
  display: flex;
  flex-direction: column;
  .ht-tab-pane--title {
    font-size: 32px;
  }

}
</style>