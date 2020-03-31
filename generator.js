//生成器
function* fn () {
   let va = yield getData()
   console.log(va)
   console.log(3)
}
function getData () {
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(100)
        },1000)
    })
}
function co(callback){
    let cb = callback()
    function nxt(da){
        let result = cb.next()
        if(result.done){
            return
        }
        result.value.then((data)=>{
            nxt(data)
        })
    }
    nxt()
}
co(fn)