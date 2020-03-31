Var Let Const

var
1、变量提升.  //undefined 申明了但是没赋值
2、可以重复申明
3、全局作用域

let
1、变量不可提升 //not defined
2、不可以重复申明 //has declared
3、块级作用域（循环括号里面一个父作用域，花阔号里面一个子作用域）
eg:
function(let a=1;a<5;a++){
     Let a = 3
     Console.log(a) //3
}
Console.log(a) //not defined 没有申明

const
1、不可提升
2、不可重复申明
3、块级作用域
4、定义的是一个常量，定义的时候必须赋值