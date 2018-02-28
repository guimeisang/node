//目的： 如何消灭恶魔金字塔
//这部分属于promise的进阶内容，promise是什么，我现在的理解就是一种处理node中异步、事件回调的链式调用思想。其实这个不仅仅是可以放在nodejs中使用，这个可以提升为一种代码设计模式。
//为了优化原始的事件监听和触发而做的；它的秘诀在于：对队列的操作
//背景：在处理一个自动化测试时，在node中，网络库是完全异步的，无法在编程层面实现像其他语言那样同步调用。为了实现同步效果只能是采用defferd模式。现在有一组纯异步的API，为了完成一串事情，我们的代码如下
/**
 * obj.api1(function(value1){
 *      obj.api2(value1,function(value2){
 *          obj.api3(value2,function(value3){
 *              obj.api4(value3,function(value4){
 *                  callback(value4);
 *              })
 *          })
 *      });
 * });
 * 这就是典型的“恶魔金字塔”,如果是利用var emitter= new event.Emitter();来主动触发事件然后监听事件改造只会让代码增加，效果一般；
 * 下面使用支持序列执行的promise：编程体验应当是前一个调用结果作为下一个调用的开始，就是传说中的链式调用；
 * promise()
 * .then(obj,api1)
 * .then(obj,api2)
 * .then(obj,api3)
 * .then(obj,api4)
 * .then(function(value4){
 *      //DO something width value4
 * },function(error){
 *      //handle any error from step1 through step4
 * })
 * .done();
 * 所以可以尝试改造下，用链式调用的思想
 */

var fs =require('fs');

var Deferred =function(){
    this.promise = new Promise();
}
debugger;
//完成态
Deferred.prototype.resolve = function(obj){
    var promise = this.promise;
    var handler;
    while((handler = promise.queue.shift())){
        if(handler&&handler.fulfilled){
            var ret = handler.fulfilled(obj);
            if(ret&&ret.isPromise){
                ret.queue = promise.queue;
                this.promise = ret;
                return;
            }
        }
    }
}

//失败态
Deferred.prototype.reject = function(obj){
    var promise = this.promise;
    var handler;
    while((handler = promise.queue.shift())){
        if(handler&&handler.fulfilled){
            var ret = handler.error(err);
            if(ret&&ret.isPromise){
                ret.queue = promise.queue;
                this.promise = ret;
                return;
            }
        }
    }
}

//生成回调函数
Deferred.prototype.callback = function(obj){
    var that = this;
    return function(err,file){
        if(err){
            return that.reject(err);
        }
        that.resolve(file);
    };
};


var Promise = function(){
    //队列用于存储待执行的回调函数
    this.queue = [];
    this.isPromise = true;
}


Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
    var handler = {};
    if(typeof fulfilledHandler === 'function'){
        handler.fulfilled = fulfilledHandler;
    }
    if(typeof errorHandler === 'function'){
        handler.error = errorHandler;
    }
    this.queue.push(handler);
    return this;
}

//测试用例
var readFile1 = function(file,encoding){
    var deffered = new Deferred();
    fs.readFile(file,encoding,deferred.callback());
    return deferred.promise;
}
var readFile2 = function(file,encoding){
    var deffered = new Deferred();
    fs.readFile(file,encoding,deferred.callback());
    return deferred.promise;
}
readFile1('file1.txt','utf8').then(function(file1){
    return readFile2(file1.trim(),'utf8');
})
.then(function(file2){
    console.log(file2);
});
