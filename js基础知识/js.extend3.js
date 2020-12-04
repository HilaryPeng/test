function SuperType(){
    this.name = [1,3,4]
}
function SubType(){
    this.age = 23
}
SubType.prototype = new SuperType();
// 实例共享 没有构造函数。
