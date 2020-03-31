//new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
//如果构造函数返回的是一个对象则返回这个对象
//new 的实现步骤：

//首先新建一个对象
//然后将对象的原型指向 Person.prototype
//然后 Person.apply(obj)指向正确的原型
//返回这个对象
function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
//返回一个基本类型的值
function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return 'handsome boy';
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // undefined
console.log(person.habit) // undefined
console.log(person.strength) // 60
console.log(person.age) // 18

//所以我们还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象
//如果没有，我们该返回什么就返回什么
function objectFactory(){
    var obj = new Object()//从Object.prototype上克隆一个对象
    Constructor = [].shift.call(arguments)//取得外部传入的构造器
    obj._proto = Constructor.prototype //指向正确的原型
    var ret = Constructor.apply(obj,arguments)//指向正确的原型
    return typeof ret === 'object' ? ret : obj //确保构造器总是返回一个对象
}

function mu (){
    var obj = new Object()
    Constructor = [].shift.call(arguments)
    obj._proto_ = Constructor.prototype
    var ret = Constructor.apply(obj,arguments)
    return typeof ret === 'object' ? ret : obj
}