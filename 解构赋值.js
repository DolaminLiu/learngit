//本质是一种匹配模式

//数组的，根据位置决定
let [x] = []
console.log(x)//undefined
//默认值
let [ y =1 ] = []
console.log(y)//1

//对象的，同名属性才能取到对应的值,先找到对应的属性名，再对后面的变量赋值
let {a:b} = {a:1}
console.log(b) //1
console.log(a)//a not defined

//基本类型的
let [a,b,c,d] = '1234'
console.log(a,b,c,d) //1,2,3,4

let {lenght:len}='haha'
console.log(len)//4

let {toString: ts} = 1
let {toString: bs} = true
console.log(ts)//function toString(){} => ts===Number.proptotype.toString
console.log(bs)//function toString(){}=> bs===Boolean.proptotype.toString

//null和undefined不能进行解构赋值 cannot read property '' of null/undefined