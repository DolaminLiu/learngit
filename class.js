//通过原型
const Parent= function(a,b){
    this.a = a
    this.b = b
    return this
}

Parent.prototype = {
    constructor: Parent,
    print:function(){
        console.log(this.a + '' +this.b);
        
    }
}
// const son = new Parent('hello','world')
console.log(son.print())

class Papa {
    constructor(a,b){
        this.a = a
        this.b = b
        return this
    }
    print(){
        console.log(this.a + ''+ this.b);
    }
}
const son = new Parent('hello','world')
//定义在类中的方法都是不可以枚举的
console.log(Object.keys(Papa.prototype));//[]


//class的继承
class Pop extends Papa {
    constructor(a,b){
        super(a,b);//子类已经继承连构造函数所有的属性和方法，没有super调用之前，子类是没有自己的this的
        this.h = Pop.print()
        return this
    }
    move(){
        console.log('hahhaha');
    }
}

