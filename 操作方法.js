数组的方法
//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
var arr = ['3','2','4','5']
unshift()// console.log(arr.unshift()) //4
// console.log(arr)

shift()//shift() 方法可向数组的开头删除一个或更多元素，并返回新的长度
// console.log(arr.shift()) //3
// console.log(arr)


concat()//arrayObject.concat(arrayX,arrayX,......,arrayX)该方法  不会!! 改变现有的数组，而仅仅会返回被连接数组的一个副本
// console.log(arr.concat()) //['3','2','4','5'] 
// console.log(arr) //['3','2','4','5']

slice()//arrayObject.slice(start,end),该方法并  不会!!  修改数组，而是返回一个子数组
// console.log(arr.slice()) //['3','2','4','5']
// console.log(arr) //['3','2','4','5']

join()//join() 方法用于把数组中的所有元素放入一个字符串
// console.log(arr.join('!')) //3!2!4!5
// console.log(arr) //['3','2','4','5']

pop()//pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
//如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值
// console.log(arr.pop()) //5
// console.log(arr) //['3','2','4']

push()//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
// console.log(arr.push()) //4
// console.log(arr) //['3','2','4','5']


reverse()//reverse() 方法用于颠倒数组中元素的顺序,该方法会改变原来的数组


sort()//sort() 方法用于对数组的元素进行排序,数组在原数组上进行排序，不生成副本,该方法会改变原来的数组
// var arr = ['3','29','4','5']
// console.log(arr.sort()) //["29", "3", "4", "5"]
// console.log(arr) //[["29", "3", "4", "5"]

splice()//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目,方法会改变原来的数组
//arrayObject.splice(index,howmany,item1,.....,itemX)
//howmany必需。要删除的项目数量。如果设置为 0，则不会删除项目
// console.log(arr.splice()) //[]
// console.log(arr) //['3','2','4','5']


toString()//toString() 方法可把数组转换为字符串，并返回结果
// console.log(arr.toString()) //3,2,4,5
// console.log(arr) //['3','2','4','5']
// document.write(arr) //3,2,4,5


字符串的方法
concat()//concat() 方法用于连接两个或多个字符串，请注意，stringObject 本身并没有被更改。
//stringObject.concat() 与 Array.concat() 很相似

slice()//stringObject.slice(start,end)方法可提取字符串的某个部分，并以新的字符串返回被提取的部分

split()//stringObject.split(separator,howmany)方法用于把一个字符串分割成字符串数组

substr()//stringObject.substr(start,length)

substring()//stringObject.substring(start,stop)
//与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数