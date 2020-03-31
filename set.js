const s = new Set([1,2,3])
console.log(s) //Set(3) {1,2,3}

//set类的属性
console.log(s.size) //3

//set类的方法
//1、set.add(value) 添加一个数据，返回set解构本身,不会重复添加
s.add('a').add('b').add('c') //Set(6) {1,2,3,'a','b','c'}
//2、set.delete(value) 删除一个数据，返回布尔值，表示是否成功
s.delete('a') //true
s.delete('a') //false
//3、set.has(value)判断是否有该值，返回一个布尔值，有就是true
//4、set.clear()清除所有数据，没有返回值
//5、set.keys()返回键名的遍历器
console.log(s.keys()) //setIterator {1,2,3,'b','c'}
//6、set.values()返回键值的遍历器
console.log(s.keys())//setIterator {1,2,3,'b','c'}
//7、set.entries()返回键值对的遍历器
console.log(s.entries()) //setIterator {[1,1],[2,2],[3,3],['b','b'],['c','c']}
//8、set.forEach()使用回调函数遍历每个成员
s.forEach(function(value,key,set){
    console.log(value+'hhh')
})
//1 hhh
//2 hhh
//3 hhh
//b hhh
//c hhh
console.log(s) //Set(5) {1,2,3,'b','c'}
let arr2 = [1,2,3,3,3,4,2,36]
let arr1 = new Set([...arr2])
console.log(arr1) //[1,2,3,4,36]