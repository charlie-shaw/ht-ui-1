
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './views/Switch/SwitchDemo.vue'
import ButtonDemo from './views/Button/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import MessageBoxDemo from './components/MessageBoxDemo.vue'
import Intro from './views/Intro/Intro.vue'
import Install from './views/Install/Install.vue'
import GetStarted from './views/GetStarted/GetStarted.vue'
// 导入进度条动画
import {start,done} from './utils/Nprogress'
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
                {path:'messagebox',component:MessageBoxDemo},
                {path:'intro',component:Intro},
                {path:'install',component:Install},
                {path:'get-started',component:GetStarted},
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