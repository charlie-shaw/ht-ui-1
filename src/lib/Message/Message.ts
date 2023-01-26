import Message from './Message.vue'
import {render,createVNode} from 'vue'
const DEFAULT = {
    offset:20,
    zIndex:2000,
    type:'info',
    duration:3000,
    showClose:false,
    appendTo:document.body,
    message:''
}
const HtMessage = function (options){
    const configs = Object.assign(DEFAULT,options)
    const vm = createVNode(Message,configs)
    const contianer = document.createElement('div')
    render(vm,contianer)
    
}
export default HtMessage