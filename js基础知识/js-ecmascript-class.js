/*
    关于构造函数 其实是一个很需要深入去理解的，在es5封装插件的时候 包含了很多知识 比如闭包 垃圾回收 全局变量 原型链 构造属性
    这些知识都是很不容易理解并组合的 也是js中级必须要掌握的技能 下面通过比较es5和es6构造函数的过程来熟悉并学习这些知识

    在js中生成实例对象的传统方法是通过构造函数。
    function Person(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
     }
    Person.prototype.init = function(name,age){
        console.log(name,age)
    }
    var a = new Person("黄致鹏",18,"男");
    a.init(a.name,a.age);
    //这里的不好之处就是如果函数都下载里面 那么比较占用内存 考虑的原型的特性 我们把函数挂载改Person的prototype上

    而es6觉得 这个东西写起来 很怪 和其他强类型比较起来 类的概念没有突出出来 所以es6引入了class关键字 其目的是定义类 看起来更简单
    清晰，更像面向对象的语法
    以上的东西改为class 来写
    constructor代表构造函数 this 代表实例对象 方法如下写即可  另外，方法之间不需要逗号分隔，加了会报错。而其中的方法是直接放入构造函数中的
    class Person{
        constructor(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        init(){
            console.log('新出生的孩子都是小宝宝')
        }
    };

    Object.assign方法可以很方便地一次向类添加多个方法。
    Object.assign(Person.prototype,{
    toString(){
        console.log("转变为字符串")
        }
    })
    let a = new Person('黄致鹏',18,"男");
    a.toString();
    而 用class定义的类中方法都是不可枚举的 与es5的不一致

     根据es6的书本来学习以下知识
     1.严格模式
     类和模块的内部，默认就是严格模式 记得es5写构造函数时，要写use strict指定严格模式 而es6考虑到未来所有的代码都在模块里运行
     所以默认升级到了严格模式
     2.constructor方法
        constructor是类的默认方法 就算在class中未声明 也会默认添加进去 倒是没理解到什么
     3.类的实例对象
      如果要实例出对象 一定要使用new命令 用class写的类 如果直接执行 则会报错
     __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，
     但依旧不建议在生产中使用该属性，     避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，
     然后再来为原型添加方法/属性。
      Object.getPrototypeOf  获取对象的实例原型
     4.const MyClass = class {  ... }; 也可以这么写 就可以直接执行了
     5.不存在变量提升 类不存在变量提升
     6.类的私有方法 和私有属性
      私有方法很常见 但es6不提供 所以需要绕点弯来实现 需要重新总结一下对于构造函数的私有 共有 继承 复制 原型等都有些疑惑与不清楚

 */




