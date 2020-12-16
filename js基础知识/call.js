/**
 * 手动实现一个call源码
 */

// 函数原型上添加 myCall方法 来模拟call
Function.prototype.myCall = function(obj, ...args){
    //我们要让传入的obj成为, 函数调用时的this值.
    
    obj._fn_ = this;  //在obj上添加_fn_属性，值是this(要调用此方法的那个函数对象)。 //this是函数对象 是fn();
    obj._fn_(...args);       //在obj上调用函数,那函数的this值就是obj. 
    delete obj._fn_; // 再删除obj的_fn_属性,去除影响.
    //_fn_ 只是个属性名 你可以随意起名，但是要注意可能会覆盖obj上本来就有的属性
}


let test = {
    name:'test'
}
let o = {
    name:'o',
    fn:function(age){
        console.log(this.name+age);
    }
}
o.fn(1) 
o.fn.call(test,2)
o.fn.myCall(test,2)


//
let test = {
    name:'test'
}
function myCall2(obj, ...args){
    obj._fn_ = this; //this指 函数对象 是fn(); 
    obj._fn_(...args);
    delete obj._fn_; //删除即可。
}
o.fn.myCall2(obj, ...args);


Function.prototype.myCall3 = function(obj){
    if(obj === null || obj === undefined){
        obj = window;
    } else {
        obj = Object(obj);
    }
    let arg = [];
    for(let i = 1; i< arg.length; i++){
        arg.push('arguments['+i + "]");
    }
    obj._fn_ = this;
    eval( 'obj._fn_(' + arg + ')' );
    delete obj._fn_;
}

let test = {
    name:'test'
}
let o = {
    name:'o',
    fn:function(){
        console.log(this.name, ...arguments);  //这里把参数显示一下
    }
}
o.fn(1,['a','b'],3)
o.fn.call(test,1,['a','b'],3)
o.fn.myCall3(test,1,['a','b'],3) 