//延迟执行时间
//如果未到指定时间再次发生，则清空之前的等待重新等待指定时间再执行最后一次
function debouncing(fn,awit,immediate){
    let timer;
    return function(){
        if(immediate){
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
        },awit)
    }
}
