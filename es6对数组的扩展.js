//Array.from() 把类组数转换成真正的数组
var lis = document.querySelectorAll('li')
var lisw = Array.from(lis)

//Array.of()创建一个数组
const arr = Array.of(1)
console.log(arr) //[1]

//find() 查找数组中满足条件的元素，并且返回第一个满足条件的元素，都不符合就是undefined
//findIndex() 返回满足条件的下标，没有就返回-1
const arr = [1,2,3,4]
let res = arr.find(function(a){
    return a<2
})
console.log(res) //1


//fill()对数组进行填充
const arr = [1,2,3,4]
arr.fill('abc',1,3) //从下标1开始到3不包括3填充
//console.log(arr) //['abc','abc','abc','abc']
console.log(arr) //[1,'abc','abc',4]

//es6对对象的扩展
//1、简化对象
//2、object.is()判断两个数据是否一样，长得一样就行
console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(+0,-0));//false
//Object.assign()用于对象的合并，将源对象的所有可枚举属性，复制到目标对象


const target = { a: 1, b: 2 };
const source = { b: {e:5}, c: 8 };

const returnedTarget = Object.assign(target, source);
source.b = 3
console.log(target);
console.log(source);
console.log(returnedTarget);
//Object { a: 1, b: Object { e: 5 }, c: 8 }
//Object { b: 3, c: 8 }
//Object { a: 1, b: Object { e: 5 }, c: 8 }

source.b.e = 3
console.log(target);
console.log(source);
console.log(returnedTarget);
//Object { a: 1, b: Object { e: 3 }, c: 8 }
//Object { b: Object { e: 3 }, c: 8 }
//Object { a: 1, b: Object { e: 3 }, c: 8 }

//函数的扩展



