<template>
  <h1>Container布局容器</h1>
  <p>用于布局的容器组件，方便快速搭建页面的基本结构</p>
  <p>
    <code>&lt;ht-container&gt;</code>：外层容器。
    当子元素中包含<code>&lt;ht-container&gt;</code>或<code
      >&lt;ht-container&gt;</code
    >
    时，全部子元素会垂直上下排列， 否则会水平左右排列。
  </p>
  <p><code>&lt;ht-container&gt;</code>：顶栏容器。</p>
  <p><code>&lt;ht-aside&gt;</code>：侧边栏容器。</p>
  <p><code>&lt;ht-main&gt;</code>：主要区域容器。</p>
  <p><code>&lt;ht-footer&gt;</code>：底栏容器。</p>
  <Demo :component="Layout1"></Demo>
  <Demo :component="Layout2"></Demo>
  <Demo :component="Layout3"></Demo>
  <Demo :component="Layout4"></Demo>
  <Demo :component="Layout5"></Demo>
  <Demo :component="Layout6"></Demo>
  <Demo :component="Layout7"></Demo>
  <Api
    :title="ContainerTitle"
    :theads="ContainerTheads"
    :bodyData="ContainerBodyData"
  ></Api>
  <Api
    :title="ContainerSlots"
    :theads="ContainerSlotsTheads"
    :bodyData="ContainerSlotsBodyData"
  ></Api>
  <Api
    :title="HeaderTitle"
    :theads="HeaderTheads"
    :bodyData="HeaderBodyData"
  ></Api>
  <Api
    :title="HeaderSlots"
    :theads="HeaderSlotsTheads"
    :bodyData="HeaderSlotsBodyData"
  ></Api>
  <Api
    :title="AsideTitle"
    :theads="AsideTheads"
    :bodyData="AsideBodyData"
  ></Api>
  <Api
    :title="AsideSlots"
    :theads="HeaderSlotsTheads"
    :bodyData="HeaderSlotsBodyData"
  ></Api>
  <Api
    :title="MainSlots"
    :theads="HeaderSlotsTheads"
    :bodyData="HeaderSlotsBodyData"
  ></Api>
  <Api
    :title="FooterTitle"
    :theads="HeaderTheads"
    :bodyData="FooterBodyData"
  ></Api>
  <Api
    :title="FooterSlots"
    :theads="HeaderSlotsTheads"
    :bodyData="HeaderSlotsBodyData"
  ></Api>
</template>

<script setup>
import Layout1 from "../../components/Container/Layout1.vue";
import Layout2 from "../../components/Container/Layout2.vue";
import Layout3 from "../../components/Container/Layout3.vue";
import Layout4 from "../../components/Container/Layout4.vue";
import Layout5 from "../../components/Container/Layout5.vue";
import Layout6 from "../../components/Container/Layout6.vue";
import Layout7 from "../../components/Container/Layout7.vue";
const ContainerTitle = "Container Attributes";
const ContainerTheads = ["属性名", "说明", "类型", "默认值"];
const ContainerBodyData = [
  [
    "direction",
    "子元素的排列方向",
    "<code>vertical|horizontal</code>",
    "子元素中有 <code>ht-header</code> 或 <code>ht-header</code> 时为 vertical，否则为 horizontal",
  ],
];
const ContainerSlots = "Container Slots";
const ContainerSlotsTheads = ["插槽名", "说明", "子标签"];
const ContainerSlotsBodyData = [[
    'default','自定义默认内容','Container / Header / Aside / Main / Footer'
]];
const HeaderTitle = "Header Attributes";
const HeaderTheads = ["属性名", "说明", "类型",'默认值'];
const HeaderBodyData = [[
    'height','顶栏高度','<code>string</code>','60px'
]];
const HeaderSlots = "Header Slots";
const HeaderSlotsTheads = ["插槽名", "说明"];
const HeaderSlotsBodyData = [[
    'default','自定义默认内容'
]];
const AsideTitle = "Aside Attributes";
const AsideTheads = ["属性名", "说明",'类型','默认值'];
const AsideBodyData = [[
    'width','侧边栏宽度	','<code>string</code>','300px'
]];
const AsideSlots = "Aside Slots";
const MainSlots = 'Main Slots';
const FooterTitle = 'Footer Attributes'
const FooterBodyData = [[
    'height','底栏高度','<code>string</code>','60px'
]]
const FooterSlots = 'Footer Slots'

</script>

<style lang="scss" scoped>
p {
  margin: 16px 0;
}
</style>