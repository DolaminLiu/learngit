//数据解构Map
//字典，是用来存储不重复key的hash解构，不同于集合set的是，字典使用的是【键，值】的形式来存储数据的
//javascript的对象（object:{}）只能用字符串当作键
//所以为来解决这个问题，es6提供的map这个数据解构，它类似于对象，也是键值对的集合，但是键不仅限于字符串，各种类得值（包括对象）也可以当作键
//所以object ==>> 字符串--值
//Map  ==>> 值--值，是一种更完善的hash解构实现

var obj1 = {a:1} ,obj2 = {b:2}, obj = {}
obj[obj1] = 1
obj[obj2] = 2
console.log(obj) //object{[object object]: 2}
//object.toString => [object object]

//创建Map
const map = new Map([
    ['a' , 1],
    ['b' , 2]
])
console.log(map) //{'a'=>1,'b'=>2}

//Map类的属性
//1.map.size

//Map的方法
//set(key,value)  前面添加的会被后面添加的覆盖，可以链式添加
map.set('lm','keai').set('you','haha')
//get(key)取值，有则返回该值，无则返回undefined
map.get('lm') //keai
map.get('s')//undefined
//delete(key)删除某个键，返回true或false
map.delete('you') //true
map.delete('you') //false
//has(key)是否有该属性，返回true或false
//map.clear()清空
//keys() 返回键名遍历器
//values()返回键值遍历器
//entries()返回所有键值对遍历器
//forEach() 同set
map.forEach(function(key,value,map){
    console.log(key + ':' + value);
    
})

//Map的注意事项
map.set(NaN,10).set(NaN,100) //=>NaN => 100
//一般情况下NaN不等于它本身但是在map里面，默认是相等的
//空对象和另外一个空对象比较{}==={}=>false比较的是内存地址，不是他们的值
map.set({},'x').set({},'y') //object{}=>'x',object{}=>'y'
//map比较的是内存地址
//map连的key排序是按照添加顺序进行排列的

