import { reactive } from "vue";
export  default function useGetElPositon(el:HTMLElement){
    const postion = reactive(el.getBoundingClientRect())
    return postion
}