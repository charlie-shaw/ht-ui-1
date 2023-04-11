import {getCurrentInstance} from 'vue'


export default function useComponentId(){
    return getCurrentInstance().appContext.config.globalProperties['z-index']+=1
}