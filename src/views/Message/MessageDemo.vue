<template>
  <!-- 基础用法 -->
  <Demo :component="MessageBasic" :desc-component="MessageBasicDesc"></Demo>
  <!-- 不同状态 -->
  <Demo :component="MessageType" :desc-component="MessageTypeDesc"></Demo>
  <!-- 可关闭的消息提示 -->
  <Demo :component="MessageClose" :desc-component="MessageCloseDesc"></Demo>
  <!-- Api属性 -->
  <Api :title="ApiTitle" :theads="ApiTheads" :bodyData="ApiBodyData"></Api>
</template>

<script lang="ts" setup>
import MessageBasic from "../../components/Message/MessageBasic.vue";
import MessageBasicDesc from "../../components/Message/MessageBasicDesc.vue";
import MessageType from "../../components/Message/MessageType.vue";
import MessageTypeDesc from "../../components/Message/MessageTypeDesc.vue";
import MessageClose from "../../components/Message/MessageClose.vue";
import MessageCloseDesc from "../../components/Message/MessageCloseDesc.vue";
    const ApiTitle = "MessageAPI";
    const ApiTheads = ["属性名", "说明", "类型", "默认值"];
    const ApiBodyData = [
      [
        "<code>message</code>",
        "消息文字",
        "<code>string | VNode | (() => VNode)</code>",
        "",
      ],
      [
        "<code>type</code>",
        "消息类型",
        "<code>'success' | 'warning' | 'info' | 'error'</code> ",
        "<code>info</code>",
      ],
      [
        "<code>duration</code>",
        "显示时间，单位为毫秒。 设为 0 则不会自动关闭",
        "<code>number</code> ",
        "<code>3000</code>",
      ],
      [
        "<code>show-close</code>",
        "	是否显示关闭按钮",
        "<code>boolean</code>",
        "<code>false</code>",
      ],
      [
        "<code>offset</code>",
        "Message 距离窗口顶部的偏移量",
        "<code>number</code> ",
        "<code>20</code> ",
      ],
      [
        "<code>appendTo</code>",
        "设置组件的根元素	",
        "<code>string | HTMLElement</code> ",
        "<code>document.body</code> ",
      ],
      [
        "<code>on-close</code>",
        "关闭时的回调函数, 参数为被关闭的 message 实例	",
        "<code>function</code> ",
        "",
      ],
    ];
</script> 

<style>
</style>