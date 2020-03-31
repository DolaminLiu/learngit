async function hello(){
    console.log(1)
    let v2 = await getData()
    console.log(3)
    try { //捕获错误信息
        let v4 = await getData()
    }catch(e){
        console.log(e)
    }
}
function getData(){
    return new Promise((resole,reject)=>{
        setTimeout(()=>{
            resole(100)
        },1000)
    })
}
hello()