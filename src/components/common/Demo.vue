<template>
  <h2 class="demoTitle" v-if="component.__sourceCodeTitle">
    {{ component.__sourceCodeTitle }}
  </h2>
  <div class="demoDesc">
    <component :is="descComponent"></component>
  </div>
  <div class="demo">
    <div class="show-demo">
      <component :is="component"></component>
    </div>
    <div class="demo-btns">
      <ht-tooltip content="复制代码" placement="bottom">
        <i class="copy" @click="copy">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-copy"></use>
          </svg>
        </i>
      </ht-tooltip>
      <ht-tooltip content="查看源代码" placement="bottom">
        <i class="source-code" @click="toggle">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-code"></use>
          </svg>
        </i>
      </ht-tooltip>
    </div>

    <div class="demo-source-code">
      <Transition name="example-source">
        <pre v-html="html" v-show="visible"></pre>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { ref } from "vue";
import HtMessage from "../../lib/Message/Message";
// 导入源代码高亮插件
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  props: {
    descComponent: {
      type: Object,
    },
    component: Object,
  },
  setup(props) {
    const visible = ref(false);
    const html = computed(() => {
      return Prism.highlight(
        (props.component as any).__sourceCode,
        Prism.languages.javascript,
        "javascript"
      );
    });
    const toggle = () => {
      visible.value = !visible.value;
    };
    // 复制代码
    const copy = () => {
      let sourceCode = document.createElement("textarea");
      // @ts-ignore
      // 将源代码赋值给textarea的value属性
      sourceCode.value = (props.component as any).__sourceCode;
      document.body.append(sourceCode);
      // 选取value值
      sourceCode.select();
      // 复制到剪贴板
      document.execCommand("copy", true);
      HtMessage({
        message: "已复制！",
        type: "success",
      });
      sourceCode.remove();
    };

    return {
      html,
      Prism,
      toggle,
      visible,
      copy,
    };
  },
};
</script>

<style lang="scss">
.demoTitle {
  margin: 36px 0 20px;
}
.demo {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: var(--ht-border-radius-base);
  .demo-btns {
    border-top: 1px dashed var(--border-color);
    padding: 5px;
    padding-right: 30px;
    display: flex;
    justify-content: end;
    > i {
      margin: 0 10px;
      &:hover {
        color: black;
      }
    }
    svg {
      cursor: pointer;
      width: 20px;
      height: 20px;
      transition: all 0.25s;
      fill: var(--ht-demo-icon-color);
      &:hover {
        fill: var(--ht-demo-icon-color--hover);
      }
    }
  }
  .demo-source-code {
    padding: 1em;
    overflow-y: hidden;
    background-color: var(--ht-fill-color-light);
    pre {
      font-family: var(--code-font-family);
    }
  }
}
.show-demo {
  padding: 1.5rem;
  max-width: 1300px;
}
.example-source-enter-from {
  max-height: 0px;
}
.example-source-enter-to {
  max-height: 500px;
}
.example-source-enter-active {
  transition: all 0.5s;
}
.example-source-leave-from {
  max-height: 500px;
}
.example-source-leave-to {
  max-height: 0px;
}
.example-source-leave-active {
  transition: all 0.5s;
}
</style>