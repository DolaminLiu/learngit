function instanceOf(left,right){
    let proto = left._propto_
    let prototype = right.prototype
    while(true){
        if(proto === null) return false;
        if(proto === prototype) return true;
        proto = prpto._propto_
    }
}