//Undefined,not defined, null,NaN

// 1、not defined
// 是一个报错，表示一个变量没有申明也没有定义
console.log(b)

//2、undefined
//不是一个报错，undefined是一个基础数据类型
//情形一
let name;
console.log(name)
//情形二
let obj = {a:3}
console.log(obj.b)

//3、null
//表示一个变量，已申明定义了一个空值，表示一个空对象，是一个关键字
Object(null) //{}

//4、NaN
//是一种数字类型，常用做数字运算返回的结果中，表示结果无法转化成数字的数字类型，它不等于自身
console.log(s='a'*1) //NaN

//typeof
typeof undefined //undefined
typeof null //object,null是js的基本数据类型，因为对象在底层被表示为二进制，在js中二进制前三位都为0会被判断为object，null的二进制都是0
typeof NaN //number

//number
Number(undefined) //NaN
Number(NaN) //NaN
Number(null) //0

//valueOf（只有NaN有方法）
undefined.valueOf() //cannot read propperty valueOf of undefined
null.valueOf() //cannot read propperty valueof of null
NaN.valueOf() //NaN

//相等判断
console.log(NaN === NaN) //false
console.log(undefined===undefined) //true
console.log(null===null)//true
//强制转换类型
console.log(NaN==NaN)//false
console.log(undefined==null)//true
console.log(NaN==null)//true
console.log(NaN==undefined)//false

//相同点
//1、布尔值转换都是false
Boolean(undefined) //false
Boolean(null)//false
Boolean(NaN) //false
