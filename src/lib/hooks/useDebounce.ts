export default function useDebounce(callback,delay:number=200){
    let timer = null ;
    return function(...arg:any[]){
        if(timer) clearTimeout(timer)
        const context = this
        const args = [...arg]
        timer = setTimeout(()=>{
            callback.apply(context,args)
        },delay)
    }
}