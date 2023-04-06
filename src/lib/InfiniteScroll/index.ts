import useDebounce from "../hooks/useDebounce"
import useThrottle from "../hooks/useThrottle"
export default function useInfiniteScroll(app) {
    app.directive("infinite-scroll", {
        mounted(el, binding,vnode) {
            
            const delay:number = vnode.props['infinite-scroll-delay'] || 200 
            // 初始化isDisabled的值
            const isDisabled:boolean = typeof vnode.props['infinite-scroll-disabled'] === 'boolean' ?vnode.props['infinite-scroll-disabled']:false
            // 初始化立即执行的值
            const isImmediate = typeof vnode.props['infinite-scroll-immediate'] === 'boolean'?vnode.props['infinite-scroll-immediate']:false
            // 传入Immediate的值，为true立即执行
            if(isImmediate) binding.value()
            el.addEventListener('scroll', useDebounce(function () {
                // 传入disabled则不执行
                if(isDisabled) return
                // 初始化distance的距离
                const distance = typeof vnode.props['infinite-scroll-distance'] === 'number'? vnode.props['infinite-scroll-distance'] : 0

                if (+this.clientHeight + this.scrollTop >= (this.scrollHeight-distance)) binding.value()
            },+delay))

        }
    })
}