
//手写一个iterator接口
const arr = [1,2,3]
function iteratoe(arr){
    let index = 0
    return {
        next: function () {
            return index < arr.length ? 
            {value:arr[index],done:false}:
            {value:undefined,done:true}
        }
    }
}
const it = iterator(arr)
console.log(it.next()) //{value:1,done:false}
console.log(it.next()) //{value:2,done:false}
console.log(it.next()) //{value:3,done:false}
console.log(it.next()) //{value:underfined,done:true}

//凡是具有Symbol.iterator属性的数据结构都有Iterator接口
//arr,set,map有，object没有
const set = new Set(['a','b'])
const map = new Map([['a'],1])
//具备Iterator的数据解构都可以进行解构赋值,
let [x,y] = set
console.log(x,y); //a,b

//扩展运算符  ...
let str = 'hello'
let arrstr = [...str]
console.log(arrstr); //['h','e','l','l','o']


//for ... of
//遍历数组就是每个数组的值，遍历键值对就是每个键值对
let mk = new Map()
mk.set('a',1).set('b',2)
for(let i of mk){
    console.log(i) 
    //['a',1]
    //['b',2]
}
for(let [key,value] of mk){
    console.log(key, value);
    //a 1
    //b 2
}
