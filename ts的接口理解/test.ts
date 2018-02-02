/*
理解ts的接口 interface
在typescript中，接口是用作约束作用的，在编译成js的时候，所有接口都会
擦掉，因为javascript中没有找个概念

 function printLable(labelledObj:{label:string}){
     console.log(labelledObj.label);
 }
 var myObj={size:10,label:"size 10 Object"};
 printLable(myObj);
以上参数中的声明就是说参数拥有一个string的label属性。但是写起来不是很容易理解。所以换了一种写法。即：
interface labelledValue{
    label:string
}
function printLable(labelledObj:labelledValue){
    console.log(labelledObj.label)
}
var myObj={size:10,label:'size 10 Object'};
printLable(myObj)
*/

/*
接口存在的意义：
    在一些可选属性上，是可有可无的，为什么还要定义呢？
    1.如果存在属性，能够约束类型，这是十分关键的。
    2.能得到语法智能提示，假如误将方法中的从color写成了collor,编译是不能够通过的。
*/


/*
可以看到自己输入的类型是否有错误。并给予提示。我的理解： 
1.对输入的类型给予了一些限制，这样大家进行写入的时候会很规范，防止出现错误。
2.如果一旦出现了一些传入类型错误，会出现提示。这对于我们的代码编译能大大的提升效率与准确性。
*/

/*方法类型:
在js中，方法function是一种基本类型。在面向对象的思想中。接口的实现是通过类来完成的。而function作为一种类型。也能够实现接口
interface SearchFunc{
    (source:string,subString:string):boolean;
}
//定义了一个SerchFunc接口 其中类型为数字与布尔型。
var mySearch : SearchFunc;
mySearch=function(source:string,subString:string){
    var result=source.search(subString);
    if(result == -1) {
        return false
    }else{
        return true;
    }
}
//表示传入的参数为数字型，但是返回的类型为布尔型

//数组类型
interface StringArray{
    [index:number]:string
}
var myArray:StringArray;
myArray=['buang',"1564"]  如果当数组中出现了其他类型就会有警示/
数组中提示，如果接口已经是数组类型的话，接口中定义的其他属性的类型都必须
是该数组的元素类型。
interface Dictionary{
    [index:string]:string;
    length:number; //error 
    因为这里面的length 为 string 类型
}
一般情况下，我们还是习惯使用一个类，实现需要的接口。
interface ClockInterface{
    currentTime:Date;
}
class Clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number,m:number){
        
    }
}

//可以使用接口约束类中定义的方法
interface ClockInterface{
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface{
    currentTime:Date;
    setTime(d:Date){
        this.currentTime=d;
    }
    constructor(h:number,m:number){}
}

继承接口
interface Shape{
    color:string;
}
interface Square extends Shape{
    slideLength:number;
}
var square = <Square>{}; //
square.color = "blue";
square.slideLength = 10;
需要注意的是，尽管支持多个接口，但是如果继承的几口中，定义的同名属性类型不同的话，
是不能编译通过的。
interface Shape{
    color:string;
    test:number;
}
interface PenStroke{
    penWidth:number;
    test:string;
}
interface Square extends Shape,PenStroke{
    sideLength:number;
}
//无法通过，因为test属性的类型无法确定。




*/












