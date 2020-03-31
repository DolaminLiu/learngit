function way(fn,awit,debounce){
    let timer = null
    let prev = 0
    return function(){
        if(debounce){
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=>{
                fn.apply(this,arguments)
            },awit)
        }else{
            const now = new Date().getTime()
            if(now - prev > awit){
                fn.apply(this,arguments)
                prev = now
            }
        }
    }
}