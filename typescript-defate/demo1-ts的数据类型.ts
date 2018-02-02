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

6.枚举 enum
enum类型是对javascript标准数据类型的一个补充。使用枚举类型可以为一组数值赋予友好的名字。
enum Color{Red,Green,Black};
let c:Color=Color.Red;
默认情况下，从0开始为元素编号。你也可以手动的指定成员的数值，并通过访问枚举的值来获得他的名字。
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
alert(colorName);
这个意思就是说 red为1 那么剩下的排序就从1开始，所以 colorName 就为Green;

7.任意值 any
什么是任意值，就是说一些类型，不确定其类型，我们不希望类型检查器对这些值进行检查 。那么我们就可以通过any类型来标记这些变量。
let noSure:any=4;
用any类型声明的东西，指定了变量以后，便可以调用这个类型的方法了。而Object不可以。

8.空值 void
void 是表示他没有任何类型。当一个函数没有返回值时，他的返回值为void.
void的赋予类型只有undefind和null。

9.Null和undefined
在ts中它们分别有自己的类型，分别为null 和undefined

10.Never
never 表示的是 那些永远不存在值的类型。
比较绕口的话，never类型是任何类型的子类型，也可以被赋值给任何类型。然而，没有类型是never的子类型 或者可以赋给never类型。即使any也不可以赋值给never。
通俗的讲，就是说never这个东西是可以当作所有类型的子类型，而出了它本身之外，任何类型都不能作为他的子类型。

11.类型断言
有时候你会遇到这样的情况，你会比typescript 更了解某个值的详细信息。 也就是说 当我写了一个值的时候 我非常清除的确定它是什么类型。ts会认
为程序员已经进行了必要的检查。
类型断言的写法：
第一种：
let someValue:any='this is a string';
let strLengths: number=(<string>someValue).length;
第二种：
let someValue:any='this is a string';
let srtLengths:number=(someValue as string).lenght;
*/


