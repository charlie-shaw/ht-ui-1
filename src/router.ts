
import { createWebHashHistory, createRouter } from 'vue-router'
import {h} from 'vue'
const Home = ()=>import('./views/Home.vue')
const Doc =()=>import('./views/Doc.vue')
const SwitchDemo = ()=>import('./views/Switch/SwitchDemo.vue')
const ButtonDemo = ()=>import('./views/Button/ButtonDemo.vue')
const DialogDemo = ()=>import('./views/Dialog/DialogDemo.vue')
const TabsDemo = ()=>import('./views/Tabs/TabsDemo.vue')
const MessageDemo = ()=>import('./views/Message/MessageDemo.vue')
// import MessageBoxDemo from './components/MessageBoxDemo.vue'
import Markdown from './components/Markdown.vue'
import Intro from './markdown/Intro.md'
import Install from './markdown/Install.md'
import GetStarted from './markdown/GetStarted.md'


const ContainerDemo = ()=>import('./views/Container/ContainerDemo.vue')
const InputDemo = ()=>import('./views/Form/InputDemo.vue')
const InputNumberDemo = ()=>import('./views/Form/InputNumberDemo.vue')
const RadioDemo = ()=>import('./views/Radio/RadioDemo.vue')
const TableDemo = ()=>import('./views/Table/TableDemo.vue')
const CheckboxDemo = ()=>import('./views/Checkbox/CheckboxDemo.vue')

// 导入进度条动画
import {start,done} from './utils/Nprogress'
const cm = string => h(Markdown,{content:string,key:string})
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
                {path:'intro',component:cm(Intro)},
                {path:'install',component:cm(Install)},
                {path:'get-started',component:cm(GetStarted)},
                {path:'message',component:MessageDemo},
                {path:'container',component:ContainerDemo},
                {path:'input',component:InputDemo},
                {path:'inputNumber',component:InputNumberDemo},
                {path:'radio',component:RadioDemo},
                {path:'table',component:TableDemo},
                {path:'checkbox',component:CheckboxDemo},
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