0 /*
    写一个构造函数  里面有公有方法 有私有方法  用es5与es6分别实现并进行继承 并写出继承类的共有方法 私有方法；

    私有属性是指针对实例而言，只能实例后调用，占多份内存
    prototype是实例共享的，修改任何一个实例的prototype都会影响到其他实例的对应 prototype
    是不是我可以这么认为 没有添加到其原型上的 变量就为私有变量




 */


//这里发现继承过来的构造函数实例出的类constructor指向的是Person 所以我们要手动改回来
NewPerson.prototype.constructor = NewPerson;
//es6的
class Cat{
    constructor(color,eye){
        this.eye = eye;
        this.color = color;
    }
    init(){
        console.log(`我是一只猫是${this.color}并且我会跳`);
    }
}
let cat1 = new Cat('green',2);
cat1.init();
//es6的继承
class Dog extends Cat{
    constructor(color,eye,name){
        super(color,eye);
        this.name = name;
    }
    init2(){
        super.init()
        console.log(`我是一只狗,名字是做${this.name}`);
    }
}
