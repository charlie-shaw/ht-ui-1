import { createApp } from 'vue'
import App from './App.vue'
// 此处要先引用组件库的样式文件，再引入项目css文件
import './lib/global.scss'
import './index.scss'
import {router} from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'
import HotUI from './components'
const app = createApp(App)

app.use(router)
app.use(HotUI)
// 全局注册markdown组件
app.component('Markdown',Markdown)
app.mount('#app')
