/**
 * 手动实现一个bind
 * 可以修改函数的指向this;
 * 绑定之后this指向不能更改。使用 call, apply不行。
 */

Function.prototype.myBind = function(obj){
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = function(){};
    var bound = function(){
        var params = Array.prototype.slice.call(arguments);
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
    }
    fn_.prototype = fn.prototype;
    bound.prototype = new fn_();
    return bound;
}