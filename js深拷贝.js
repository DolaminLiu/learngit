//深拷贝以后的值不会改变原来的值
//object.assign()合并的是对象，浅拷贝
//object.assign()合并的值是 数字、空符串 ''、布尔值(false或true) 、undefined、null，深拷贝
//Object.assign方法是浅拷贝即只有一层值的时候拷贝是没问题的，拷贝之后，origin和target1的值再改变时是不会相互影响的
//拷贝的对象如果有两层及以上的时候，拷贝之后会相互影响，target1改变 origin也会跟着改变
function deepCopy(obj){
    //判断是否简单数据类型
    if(typeof(obj)==='object'){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {} //判断是数组还是对象
        for(let i in obj){ //遍历这个数组或对象
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i] //每个元素是否又是复杂类型
        }
    }else{
        var result = obj
    }
    return result;
}

function deepCopy(obj){
    if(typeof(obj) === 'object'){
        var result = obj.constructor == Array ? []:{}
        for(let i in obj){
            result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i]
        }
    }
    else{
        var result = obj
    }
    return result
}


function dep(obj){
    if(typeof(obj)==='object'){
        var res = obj.constructor == Array? [] : {}
        for(let i in obj){
            res[i] = typeof obj[i] == 'object' ? dep(obj[i]) : obj[i]
        }
    }else{
        var res = obj
    }
    return res
}