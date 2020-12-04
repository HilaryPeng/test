/**
 * new 操作符执行了什么操作
 * 1.创建新对象
 * 2.将构造函数的作用域赋给新对象 （this）
 * 3.执行构造函数
 * 4.返回新对象。
 */
function SuperType(name,age){
    this.name = name;
    this.age = age;
}
function newCustom(Constructor,...args){
    let o = Object.create(Constructor.prototype);
    let val = Constructor.apply(o, args);
    return isPrimitive(val) ? o : val;
}
function isPrimitive(val){
    return typeof val !== 'object' || val === null
}

let a = newCustom(SuperType, 'qpeng','23');
console.log(a);