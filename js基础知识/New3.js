/**
 * 
 */
function Person(name,age){
    this.name = name;
    this.age = age;
}
let person = new Person('zhipeng',18);
function implementsNew(Constructor, ...args){
    // let obj = {};
    // obj.__proto__ = Constructor.prototype;
    obj = Object.create(Constructor.prototype);
    Constructor.call(obj,...args);
    return obj;
}
let person2 = implementsNew(Person, 'zhipeng',18);
console.log(person, person2);