<template>
  <h1>Switch 开关</h1>
  <!-- 基本用法 -->
  <Demo :component="SwitchDefault" :desc-component="SwitchDefaultDesc"></Demo>
  <!-- 尺寸 -->
  <Demo :component="SwitchSize" :desc-component="SwitchSizeDesc"></Demo>
  <!-- 文字描述 -->
  <Demo :component="SwitchText" :desc-component="SwitchTextDesc"></Demo>
  <!-- 禁用状态 -->
  <Demo :component="SwitchDisabled" :desc-component="SwitchDisabledDesc"></Demo>
</template>

<script lang="ts">
import { ref } from "vue";
import Demo from "../../components/common/Demo.vue";
import SwitchDefault from "../../components/Switch/SwitchDefault.vue";
import SwitchDefaultDesc from "../../components/Switch/SwitchDefaultDesc.vue";
import SwitchSize from "../../components/Switch/SwitchSize.vue";
import SwitchSizeDesc from "../../components/Switch/SwitchSizeDesc.vue";
import SwitchText from "../../components/Switch/SwitchText.vue";
import SwitchTextDesc from "../../components/Switch/SwitchTextDesc.vue";
import SwitchDisabled from "../../components/Switch/SwitchDisabled.vue";
import SwitchDisabledDesc from "../../components/Switch/SwitchDisabledDesc.vue";
export default {
  components: {
    Demo,
    SwitchDefault,
    SwitchDefaultDesc,
    SwitchSize,
    SwitchSizeDesc,
    SwitchTextDesc,
    SwitchText,
    SwitchDisabledDesc,
    SwitchDisabled
  },
  setup() {
    return {
      SwitchDefault,
      SwitchDefaultDesc,
      SwitchSize,
      SwitchSizeDesc,
      SwitchTextDesc,
      SwitchText,
      SwitchDisabledDesc,
      SwitchDisabled
    };
  },
};
</script>
