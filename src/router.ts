
import { createWebHashHistory, createRouter } from 'vue-router'
import {h} from 'vue'
const Home = ()=>import('./views/Home.vue')
const Doc =()=>import('./views/Doc.vue')
const SwitchDemo = ()=>import('./views/Switch/SwitchDemo.vue')
const ButtonDemo = ()=>import('./views/Button/ButtonDemo.vue')
const DialogDemo = ()=>import('./views/Dialog/DialogDemo.vue')
const TabsDemo = ()=>import('./components/TabsDemo.vue')
const MessageDemo = ()=>import('./views/Message/MessageDemo.vue')
// import MessageBoxDemo from './components/MessageBoxDemo.vue'
import Markdown from './components/Markdown.vue'
const ContainerDemo = ()=>import('./views/Container/ContainerDemo.vue')
const InputDemo = ()=>import('./views/Form/InputDemo.vue')
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
                {path:'container',component:ContainerDemo},
                {path:'input',component:InputDemo},
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