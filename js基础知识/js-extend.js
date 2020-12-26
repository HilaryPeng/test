// js 实现各种方式的继承


/**
 * 原型继承的问题
 * 1.包含引用类型的原型属性会被所有实例共享。 如果name是一个对象 那么所有实例对象都能访问并改变它。
 * 2.不能向超类构造函数传参数。
 */
// function Father(){
//     this.name = 'I am father'
// }
// function Son(){
//     this.age = 14;
// }
// //想要Son的实例子继承Father的属性和方法
// Son.prototype = new Father();
// let a = new Son();
// console.log(a);
// //让原型对象指向另一个实例实现继承。

/**
 * call和apply 每个函数都有这两个方法。 call可以重新定义函数的执行环境。 也就是this的指向。
 * call() 调用一个对象的方法，用另一个对象替换当前对象。可以继承另外一个对象的属性。
 * Function.call(obj[,paramer1,paramer2])
 * call方法可以用来代替另一个对象调用一个方法，call方法可以将一个函数的对象上下文从初始的上下文改变为obj指定的新对象，
 * 如果没有提供obj参数，那么Global对象被用于obj。
 */

/**
 * 借用构造函数
 * 在子类中调用父类构造函数
 */

//  function Father(){
//     this.name = 'apeng';
//  }

//  function Sun(){
//     Father.call(this) // this指向father。
//  }
//  //借用构造函数继承，方法都在构造函数中定义，超类型原型中定义的方法对子类型是不可见的。
//  let a = new Sun();
//  console.log(a)

/** 
 * 组合继承
 * 原型和构造函数结合到一起
 * 但他会会在执行过程中调用两次超类型的构造函数：一次是创建子类型原型的时候，一次是在子类型构造函数内部调用。
 * 两次调用分别会在 SubType.prototype 和 新实例对象上创建重复的属性。只是在查找时新实例对象属性覆盖了 SubType.prototype 上的重复属性而已。
 * 为了避免重复调用超类型的构造函数，我们将寄生式继承与组合时继承结合起来。
 */

//   function SuperType(name,age){
//       this.name = name;
//       this.age = age;
//   }

//   function SupType(name,age,sex){
//       SuperType.call(this,name,age); //继承属性
//       this.sex = sex;
//   }
//   SuperType.prototype.get = function(){
//       return 1;
//   }
//   SupType.prototype = new SuperType(); //继承方法
//   SupType.prototype.constructor = SupType;

//   let a = new SupType('apeng',13,'nan')
//   console.log(a);
// 继承父类的name,age,get

/** 
 * 原型式继承
 * 还需要再加理解一下
 * Object.create()
 * 创建一个临时的构造函数，将其原型指向指定对象，最后返回该临时构造函数的实例。这也是Object.create()的原理
 * 同原型链继承一样，原型上的引用类型值都会被共享。
 */



/**
 * 寄生式继承
 * 创建一个封装继承过程的函数，在该函数内部以某种方式增强对象，最后返回对象。
 * 使用寄生式继承为对象添加的函数无法复用，与构造函数模式类似。
 * 相当于方法不是在原型链上。
 */


/**
 * 寄生组合式继承
 * 
 * 
 * 
 */
// 使用寄生模式让子类型的 prototype 指向 超类型原型的副本
function inheritPrototype(subType, superType) {
    subType.prototype = Object.create(superType.prototype);
    subType.prototype.constructor = subType;
}

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.getName = function() {
    console.log('getName', this.name)
    return this.name
}

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}

// 继承方法，替代原先的 SubType.prototype = new SuperType()
inheritPrototype(SubType, SuperType)

SubType.prototype.getAge = function() {
    console.log('getAge', this.age);
    return this.age;
}
let a = new SubType('apeng', 23);
console.log(a)
class cat extends Animal {
    constructor(name) {
        super(name);
    }
    say() {
        return this.name;
    }
}