
import { createWebHashHistory, createRouter } from 'vue-router'
import {h} from 'vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './views/Switch/SwitchDemo.vue'
import ButtonDemo from './views/Button/ButtonDemo.vue'
import DialogDemo from './views/Dialog/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
// import MessageBoxDemo from './components/MessageBoxDemo.vue'
import MessageDemo from './views/Message/MessageDemo.vue'
import Markdown from './components/Markdown.vue'
// 导入进度条动画
import {start,done} from './utils/Nprogress'
const cm = filename => h(Markdown,{path:`../markdown/${filename}.md`,key:filename})
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '', redirect: '/home' },
        { path: '/home', component: Home },
        // @ts-ignore
        {
            path: '/doc', component:Doc,
            children:[
                {path:'',redirect:'/doc/intro'},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo},
                // {path:'messagebox',component:MessageBoxDemo},
                {path:'intro',component:cm('Intro')},
                {path:'install',component:cm('Install')},
                {path:'get-started',component:cm('GetStarted')},
                {path:'message',component:MessageDemo},
            ]
        }
    ]
})
router.beforeEach(()=>{
    start()
})
router.afterEach(()=>{
    done()
})
export{router}