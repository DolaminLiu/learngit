//模拟实现call
//call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1
//注意两点：
//call 改变了 this 的指向，指向到 foo
//bar 函数执行了

//试想当调用 call 的时候，把 foo 对象改造成如下：
var foo = {
    value: 1,
    bar: function() {
        console.log(this.value)
    }
};
foo.bar(); // 1
//这个时候 this 就指向了 foo

//但是这样却给 foo 对象本身添加了一个属性，这可不行呐！
//不过也不用担心，我们用 delete 再删除它不就好了~
//所以我们模拟的步骤可以分为：

//将函数设为对象的属性
//执行该函数
//删除该函数

// 第一步
foo.fn = bar
// 第二步
foo.fn()
// 第三步
delete foo.fn
//fn 是对象的属性名，反正最后也要删除它，所以起成什么都无所谓

Function.prototype.call2 = function(context){
    var context = context || window
    context.fn = this

    var args = []
    for(var i=1,len=arguments.length;i<len;i++){
        args.push('arguments['+i+']')
    }
    var result = eval('context.fn('+args+')') //eval执行js

    delete context.fn
    return result;
}
// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }