/**
 * 直接使用原型链继承 //共享属性 无法传递参数
 * 借用构造函数 
 * 组合  缺陷 调用两次构造函数
 * 原型 使用一个空对象Fn()来当中间转接物。
 * 寄生
 * 寄生组合 在函数内部增强对象。
 */
let array = [1,2,3,4]
function SuperType(){
    this.name = array;
}
SuperType.prototype.get = function(){
    return this.name;
}
function SubType(){
    SuperType.call(this);
    this.age = 15;
}
SuperType.prototype.eat = function(){
    return '2'
}
function inherits(SuperType, SubType){
    // function F(){};
    // F.prototype = SuperType.prototype;
    // SubType.prototype = new F();
    SubType.prototype = Object.create(SuperType.prototype)
    SubType.prototype.constructor = SubType;
}
inherits(SuperType, SubType);
let b = new SubType();
array.push('23')
console.log(b)