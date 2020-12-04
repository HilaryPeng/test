/**
 * 1. 原型链继承
 *  如果是引用对象那么会共享属性。这点不好;而且无法传递参数。
 * function SuperType(){
    this.name = 'apeng';
    }
    function SubType(){
        this.age = 20
    }
    SubType.prototype = new SuperType();
    let a = new SubType();
    console.log(a);
    //
 * 2. 借用构造函数继承
 function SuperType(age){
    this.name = ['1',3,3,4];
    this.age = age;
}
function SubType(age,sex){
    SuperType.call(this,age);
    this.sex = sex;
}
let a = new SubType(20,'nan'); //没有继承方法
console.log(a);
 * 3. 组合继承
 function SuperType(age){
    this.name = ['1',3,3,4];
    this.age = age;
}
SuperType.prototype.get = function(){
    return 1;
}
function SubType(age,sex){
    SuperType.call(this,age);
    this.sex = sex;
}
SubType.prototype = new SuperType(); //继承方法；
SubType.prototype.constructor = SubType; //添加构造函数
let a = new SubType(20,'nan'); //继承了方法
console.log(a);
 * 4. 原型继承
function inherits(SuperType, SubType){
    function F(){};
    F.prototype = SuperType.prototype;
    SubType.prototype = new F();
    SubType.prototype.constructor = SubType;
}

function SuperType(){
    this.name = 'apeng';
}
function SubType(){
    this.age = 20;
}
// function F(){
// }
SuperType.prototype.eat = function(){
    return '2'
}
// F.prototype = SuperType.prototype;
// SubType.prototype = new F();
// SubType.prototype.constructor = SubType;
inherits(SuperType, SubType);
SubType.prototype.get = function(){
    return 2;
}
let a = new SubType();
console.log(a)
console.log(a.__proto__ === SubType.prototype)
console.log(a.__proto__.__proto__ === SuperType.prototype);
 * 5. 寄生继承
 function inherits(obj){
    function F(){

    }
    F.prototype = obj;
    return new F();
}
function cloneObj(obj){
    var clone = inherits(obj);
    clone.get = function(){
        return 1;
    }
    return clone;
}
 * 6. 寄生组合继承
 * 
 

 * 
 * 
 */

 //我们可以看出继承一个父类就是把子类的__proto__指向父类的实例从而获取继承的属性。
 //原型继承 就是通过构造一个空对象。
//寄生式继承 在函数内部以某种方式增加对象，返回对象。
//函数的__proto__指向Function.prototype;


function inherits(SuperType, SubType){
    SubType.prototype = Object.create(SuperType.prototype);
    SubType.prototype.constructor = SubType;
}
function SuperType(age,name){
    this.age = 12;
    this.name = [12,4546,6]
}
// SuperType.prototype.get = function(){
//     return 1;
// }
function SubType(age,name,sex){
    SuperType.call(this,age,name); //继承属性；
    this.sex = sex;
}
inherits(SuperType, SubType);

let a= new SubType('apeng','zhipeng','name')
console.log(a);
console.log(SubType.__proto__ === Function.prototype)
console.log(a.__proto__ === SubType.prototype);
console.log(SuperType.__proto__=== Function.prototype);
console.log(SuperType.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ === null);// 原型对象不需要指向谁。 就是函数的prototyp不需要指向谁
//Super.prototype 不需要指向谁把 他本来就是一个对象。只有__proto__才需要指向谁。


