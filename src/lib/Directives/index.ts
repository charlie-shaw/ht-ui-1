import type{App} from 'vue'
import useInfiniteScroll from '../InfiniteScroll/index'
export default function useDirectives(app:App):void{
    useInfiniteScroll(app)
}