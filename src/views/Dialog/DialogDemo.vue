<template>
  <!-- 基础用法 -->
  <Demo :component="DialogBasic" ></Demo>
  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
  <!-- 插槽 -->
  <Api :title="SlotTitle" :theads="SlotTheads" :bodyData="SlotBodyData"></Api>
  <!-- 事件 -->
  <Api :title="EventTitle" :theads="EventTheads" :bodyData="EventBodyData"></Api>
</template>

<script lang="ts" setup>
import DialogBasic from '../../components/Dialog/DialogBasic.vue';
    const EventTitle ='事件';
    const EventTheads =['事件名','说明','参数']
    const EventBodyData = [
      ['open','Dialog打开的回调',""],
      ['opend','Dialog 打开动画结束时的回调',""],
      ['close','Dialog 关闭的回调',""],
      ['closed','Dialog 关闭动画结束时的回调',""],
    ]
    const SlotTitle = '插槽';
    const SlotTheads = ['插槽名','说明'];
    const SlotBodyData = [
      ['','Dialog的内容'],
      ['header','对话框标题的内容；会替换标题部分，但不会移除关闭按钮'],
      ['footer','Dialog按钮操作区的内容']
    ]
    const ApiTitle = "属性";
    const ApiTheads = ["属性名", "说明", "类型","可选值", "默认值"];
    const ApiBodyData = [
      [
        "<code>visible</code>",
        "是否显示Dialog",
        "<code>boolean</code>",
        "",
        ""
      ],
      [
        "<code>width</code>",
        "Dialog的宽度",
        "<code>string/number</code> ",
        "",
        "30%"
      ],
      [
        "<code>title</code>",
        "Dialog 对话框 Dialog 的标题",
        "<code>string</code> ",
        "",
        ""
      ],
      [
        "<code>top</code>",
        "	Dialog距离顶部的值",
        "<code>string</code>",
        "",
        "15vh"
      ],
      [
      "<code>before-close</code>",
        "	关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.",
        "<code>Function(done) (done 用来关闭 Dialog)</code>",
        "",
        ""
      ],
      [
        "<code>show-close</code>",
        "是否显示关闭按钮	",
        "<code>boolean</code> ",
        "",
        "true"
      ],
      [
        "<code>close-on-press-escape</code>",
        "是否可以通过按下 ESC 关闭 Dialog",
        "<code>boolean</code> ",
        "",
        "true"
      ],
      [
        "<code>close-on-click-modal</code>",
        "是否可以通过点击 遮罩层 关闭 Dialog",
        "<code>boolean</code> ",
        "",
        "true"
      ],
      [
        "<code>custom-class</code>",
        "Dialog 的自定义类名",
        "<code>string</code> ",
        "",
        ""
      ],
    ];
</script>

<style>

</style>