/*
ts的基本类型
1 布尔值
let isDone:boolean =false;

2 数字类型 和js一样都是浮点型
let decLiteral:number=5;

3 字符串
let tst:string='huangzhipeng';
tst='huangdashao';
可以使用模板字符串 与ES6拼接字符串一样
let  name: string='黄志鹏';
let  age:number=37;
let sentence:string=`Hello,my name is ${name}.
i well be $(age+1) years old next month.`

4 数组
 有两种方式可以定义数组
1 .可以在元素类型后面接上[];
let list:number[]=[1,2];
2.使用数组泛型
let list3:Array<number>=[1,2,3];

5元组Tuple
元组类型允许表示一个已知元素数量和类型的数组。各元素类型不必相同
let x:[string,number];
x=['hello',15]; //oK
x=[10,'hello']; //error
当访问已知一个索引的元素，会得到正确的类型。
如果调用类型的方法的时候，不是正确的类型，就会抛出一个错误。
比如访问上面的x[1]的时候调用字符串的方法。x[1].substr 会抛出一个错误。
又比如x这个元组中只有两个元素，当访问第三个元素时也就是一个越界的元素的时候，会得到正确的类型。 x[2]='wrold' 但 x[3]=true 就不对了
也就是说访问越组元素进行赋值的时候，如果这个元素的类型为声明的类型，则不会报错，如果不是其声明的类型。就会报错。

6.枚举
enum类型是对javascript标准数据类型的一个补充。使用枚举类型可以为一组数值赋予友好的名字。
enum Color{Red,Green,Black};
let c:Color=Color.Red;
默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值，并通过访问枚举的值来获得他的名字。
enum Color{Red=1,Green,Black};
Color[1]
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
*/

function a(){
    let a=10;
    return function b(){
        let b=a+1;
        return b;
    }
    console.log(b)
}
a();

