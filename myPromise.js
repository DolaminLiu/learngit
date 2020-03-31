function myPromise(constructor){
    let self = this
    self.status = 'padding'
    self.value = undefined
    self.reason = undefined
    function resolve(value){
        if(self.status == 'pedding'){
            self.value = value
            self.status = 'resolved'
        }
    }
    function reject(reason){
        if(self.status == 'pedding'){
            self.reason = reason
            self.status = 'rejected'
        }
    }
    try{
        constructor(resolve,reject)
    }catch(e){
        reject(e)
    }
}
myPromise.prototype.then = function(onFullFilled,onRejected){
    let self = this
    switch (self.status){
        case 'resolved':
            onFullFilled(self.value);
            break;
        case 'rejected':
            onRejected(self.reason);
            break;
    }
}