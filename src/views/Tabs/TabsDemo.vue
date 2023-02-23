<template>
  <h1>Tabs 标签页</h1>
  <!-- 基本用法 -->
  <Demo :component="TabsBasic" :desc-component="TabsBasicDesc"></Demo>
  <!-- card卡片风格 -->
  <Demo :component="TabsCard" :desc-component="TabsCardDesc"></Demo>
  <!-- border-card卡片风格 -->
  <Demo :component="TabsBorderCard" :desc-component="TabsBorderCardDesc"></Demo>
  <!-- disabled禁用 -->
  <Demo :component="TabsDisabled" :desc-component="TabsDisabledDesc"></Demo>
    <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
    <!-- Tabs事件 -->
  <Api :title="event" :theads="eventTheades" :bodyData="eventBodyData"></Api>
    <!-- Tabs-pane属性 -->
  <Api :title="PaneTitle" :theads="PaneTheads" :bodyData="PaneBodyData"></Api>
    <!-- Tabs-pane插槽 -->
  <Api :title="PaneSlotTitle" :theads="PaneSlotTheads" :bodyData="PaneSlotBodyData"></Api>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TabsBasic from "../../components/Tabs/TabsBasic.vue";
import TabsBasicDesc from "../../components/Tabs/TabsBasicDesc.vue";
import TabsCard from "../../components/Tabs/TabsCard.vue";
import TabsCardDesc from "../../components/Tabs/TabsCardDesc.vue";
import TabsBorderCard from "../../components/Tabs/TabsBorderCard.vue";
import TabsBorderCardDesc from "../../components/Tabs/TabsBorderCardDesc.vue";
import TabsDisabled from "../../components/Tabs/TabsDisabled.vue";
import TabsDisabledDesc from "../../components/Tabs/TabsDisabledDesc.vue";


    const ApiTitle = "Tabs属性";
    const ApiTheads = ["属性名", "说明", "类型", "可选值", "默认值"];
    const ApiBodyData = [
      ["v-model", "绑定值，选中选项卡中的name", "string/number", "", "第一个选项卡的name值"],
      ["type", "风格类型", "string", "card/border-card", ""]
    ];
    const event = "Tabs事件";
    const eventTheades = ["事件名", "说明", "回调参数"];
    const eventBodyData = [
      ["tab-click", "tab被选中时触发", "(pane: TabsPaneContext, ev: Event)"],
      ["tab-change", "<code>activeName</code> 改变时触发", "(name: TabPaneName)"],
    ];
     const PaneTitle = "Tabs属性";
    const PaneTheads = ["属性名", "说明", "类型", "可选值", "默认值"];
    const PaneBodyData = [
      ["label", "选项卡标题", "string", "", ""],
      ["disabled", "是否禁用", "boolean", "", "false"],
      ["name", "与选项卡绑定值 value 对应的标识符，表示选项卡别名", "string / number", "", ""],
    ];
     const PaneSlotTitle = "Tab-pane 插槽";
    const PaneSlotTheads = ["插槽名", "说明"];
    const PaneSlotBodyData = [
      ["", "Tab-pane 的内容"],
      ["label", "Tab-pane 的标题内容"],
    ];
</script>
