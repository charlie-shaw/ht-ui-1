// @ts-ignore
import Message from './Message.vue'
import { render, h } from 'vue'
const DEFAULT = {
    message: '',
}
let msg_id = 1;
let OFFSET = 20;
let zIndex = 2000;
const containers = []
const HtMessage = function (options) {
    renderVnode(options)

}
function renderVnode(options) {
    const PropClose = options.close
    const id = `message_${msg_id++}`
    zIndex+=1;
    let offsetTop = options.offset || OFFSET
    let offset = options.offset || OFFSET
    const onClose = () =>{
        close(id,PropClose,offset)
    }
    let prev = containers[containers.length-1]?.component.refs.message
    if(prev){
        offsetTop+=prev.offsetTop + prev.offsetHeight
    }
    const props = {...options,id,close:onClose,zIndex,offset:offset,offsetTop}
    
    const vm = h(Message, props)
    const contianer = document.createElement('div')
    
    render(vm, contianer)
    containers.push(vm)
    
    
    
}
const close = (id,PropClose,offset)=>{
    const i = containers.findIndex(com =>{
        return com.props.id === id
    })
    // 获取当前组件的实例，作为close事件function的第一个参数

    if(i==-1) return
    const current= containers[i]
    // 获取当前组件的高度
    const elHeight = current.component.refs.message.offsetHeight
    const top = elHeight + offset
    PropClose?.(current)
    // 从containers中删除该组件,当一个组件被删除后,那么会使后面的组件往上移动
    containers.splice(i,1)
    containers.forEach((cm,index)=>{
        const el = cm.component.refs.message
        // 如果手动关闭(删除)了中间的组件，那么后面的组件往前移动，前面的不需要动
        if(index<i) return
        el.style['top'] = (cm.props.offsetTop - top) +'px'
        cm.props.offsetTop -= top
    })    
}
export default HtMessage