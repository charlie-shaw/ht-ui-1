<template>
  <h2 class="demoTitle" v-if="title">{{ title }}</h2>
  <div class="demoDesc">
    <component :is="descComponent"></component>
  </div>
  <div class="demo">
    <div class="show-demo">
      <component :is="component"></component>
    </div>
    <div class="demo-btns">
      <i class="copy">
        <svg class="icon" aria-hidden="true" >
          <use xlink:href="#icon-copy"></use>
        </svg>
      </i>
      <i class="source-code" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-code"></use>
        </svg>
      </i>
    </div>
    <div class="demo-source-code">
        
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
    descComponent: {
      type: Object,
    },
    component: Object,
  },
  setup(props) {
    console.log((props.component as any).__sourceCode);
    
    return{
        
    }
  },
};
</script>

<style lang="scss">
.demoTitle {
  margin: 36px 0 20px;
}
.demo {
  border: 1px solid var(--border-color);
  border-radius: var(--ht-border-radius-base);
  .demo-btns {
    border-top: 1px dashed var(--border-color);
    padding: 5px;
    padding-right: 30px;
    display: flex;
    justify-content: end;
    > i{
        margin: 0 10px;
       &:hover{
        color: black;
       }
    }
    svg{
        cursor: pointer;
        width: 20px;
        height: 20px;
        transition: all 0.25s;
        fill: var(--ht-demo-icon-color);
        &:hover{
            fill: var(--ht-demo-icon-color--hover);
        }
    }
  }
}
.show-demo {
  padding: 1.5rem;
}
</style>