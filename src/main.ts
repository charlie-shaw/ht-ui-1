import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory,createRouter } from 'vue-router'
import Charlie from './components/Charlie.vue'
import Charlie2 from './components/Charlie2.vue'
const  history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Charlie},
        {path:'/xxx',component:Charlie2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
