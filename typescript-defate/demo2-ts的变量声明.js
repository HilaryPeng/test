/*
相当于在复习一遍把

var 声明
函数内部声明var 变量，闭包的访问。一个函数内的另一个函数可以访问外这个函数内的变量。
例如一个闭包函数
function a(){
    var a=10;
    return function b(){
        var b=a+1;
        return b;
    }
}
var t=a();
t() //输出11
发现函数内部的b可以访问到a的变量。

var声明提升的问题。
function a(){
    a=8;
    console.log(a);
    var a=10;
}
//发现 输出的为8 如果没有a=8;也不报错，会输出undefined.

for循环的问题
    for(var i=0;i<=10;i++){
        console.log(i) //这样写可以输出所有的i;
    }
    要说明的不是这个问题
   for (var i=0;i<10;i++){
    function a(){
        console.log(i)
    };
   setTimeout("a()",1);
}
//发现会输出十次10 这个就有问题了 
因为for循环执行完毕为10 那么函数被调用去访问的时候 i就为10;一般这种情况的时候我们会用一个立即执行的匿名函数来记录这个i


let的用法。
let 块级作用域。 存在暂时性死区。
表示只作用在这个作用域内。外部变量是不可以访问的。
不能多次声明。
外部作用域不能访问到局部的变量
return 也不可以么？ //我认为是可以的


const 的用法 
const 被赋值无法被改变，不能对他重新赋值。但它为一个对象的时候，可以对他的属性和方法就行赋予改变。也就是说内部的状态是可以修改的


解构数组
let input=[1,2];
let [first,second]=input;
console.log(first) //1
console.log(second) //2

let [first, ...rest] = [1, 2, 3, 4];
console.log(rest) //[2,3,4];

对象解构

let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, b} = o;
({a, b} = {a: "baz", b: 101});
对象属性的重命名
let {a, b}: {a: string, b: number} = o;
默认值
function a(who:{a:strgin,b?:number}){
    let {a,b=1001} =who;
}

解构中的函数声明。
相比ES6来说 函数的默认值我可以使用，解构赋值，对于多层嵌套的解构会很容易出错。但是更节约空间。



*/