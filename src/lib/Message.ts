import Message from './Message.vue'
// import Button from './Button.vue'
import { createApp, h } from 'vue'
const MessageBox = function () {
    this.alert = function (message: string, title: string, options) {
        const {confirmButtonText,ok} = options
        const div = document.createElement('div')
        document.body.append(div)

        const close = () => {
            app.unmount(div)
            div.remove()
        }
        const app = createApp({
            render() {
                return h(Message, {
                    visible: true,
                    type:'alert',
                    'onUpdate:visible': (newvisible) => {
                        if (newvisible === false) {
                            close()
                        }
                    },
                    ok,
                    confirmButtonText
                },
                    { title: title, content: message })
            }
        })
        app.mount(div)
    }
}
const HtMessageBox = new MessageBox()
export { HtMessageBox }