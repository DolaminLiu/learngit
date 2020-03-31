let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('成功')
    },Math.random() * 1000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('失败')
    },Math.random() * 1000)
})
p1.then((data)=>{
    console.log(1)
},(err)=>{
    console.log('a')
}).then((data)=>{ //then以后默认会返回一个resolve状态的promise对象，这个then打印 2
    console.log(2)
},(err)=>{
    console.log('b')
    Promise.reject() //手动改成reject状态，下一个 then打印 'c'
}).then((data)=>{
    console.log(3)
},(err)=>{
    console.log('c')
    Promise.reject()
}).then((data)=>{
    console.log(4)
}).catch(()=>{ //如果catch前面的then第二个参数是存在的,那么还是会走第二个参数再进行捕获，最终到catch
    console.log('错了')
    //catch也会和then一样返回一个默认resolve状态的promise对象
})

//Array.every
Promise.all([p1,p2]).then(data =>{
    console.log(data)
},(err)=>{
    console.log(err)
})

//Array.some
Promise.race([p1,p2]).then(data =>{
    console.log(data)
},(err)=>{
    console.log(err)
})