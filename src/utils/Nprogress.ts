import NProgress from "nprogress";
import 'nprogress/nprogress.css';
NProgress.configure({
    // easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 更改启动时使用的最小百分比
    parent: 'body', //指定进度条的父容器
  })

//   进度条开始方法
const start = ()=>{
    NProgress.start()
}
// 进度条结束方法
const done = ()=>{
    NProgress.done()
}
export {start,done}