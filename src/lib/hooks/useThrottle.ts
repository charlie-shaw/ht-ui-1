export default function useThrottle(callback,wait=200){
    let priorTime = 0;
    
    return function (...arg:any[]){
        let args = [...arg]
        let context = this
        let now = Date.now()
        if(now - priorTime > wait){
            callback.apply(context,args)
            priorTime = now
        }
    }
}