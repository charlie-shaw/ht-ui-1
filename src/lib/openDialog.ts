import Dialog from './Dialog.vue'
import { createApp,h } from 'vue'
export const openDialog = (options) =>{
    const {title,content} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = ()=>{
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render(){
            return h(Dialog,{
                visible:true,
                title,
                'onUpdate:visible':(val)=>{
                    if(val===false){
                        close()
                    }
                }
            },{default:content})
        }
    })
    app.mount(div)
}