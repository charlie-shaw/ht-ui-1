import type{App} from 'vue'
import useInfiniteScroll from '../InfiniteScroll/index'
import useIsElement from '../Tooltip/useIsElement'
export default function useDirectives(app:App):void{
    useInfiniteScroll(app)
    useIsElement(app)
}