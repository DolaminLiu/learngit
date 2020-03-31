//事件之间触发的时间间隔如果小于指定时间则不执行
function throtting(fn,awit){
    let prev = new Date()
    return function(){
        const now = new Date()
        if(now - prev > awit){
            fn.apply(this,arguments)
            prev = new Date()
        }
    }
}
