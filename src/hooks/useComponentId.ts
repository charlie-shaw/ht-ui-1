import {getCurrentInstance} from 'vue'


export default function useComponentId(){
    return getCurrentInstance().appContext.config.globalProperties['ht-id']+=1
}