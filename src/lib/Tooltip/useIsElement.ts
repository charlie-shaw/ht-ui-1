
import useGetElPosition from '../hooks/useGetElPosition'

export default function useIsElement(app) {
    app.directive("is-element", {
        mounted(el: HTMLElement, binding, vnode: any) {

            el.addEventListener('mouseenter', () => {
                binding.value(useGetElPosition(el))
                vnode.props['onUpdate:tooltip'](true)

            })
            el.addEventListener('mouseleave', () => {
                binding.value(useGetElPosition(el))
                vnode.props['onUpdate:tooltip'](false)
            })

        }
    })
}