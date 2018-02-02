/*
tc接口
typescript的核心原则之一是对所具有的shape进行类型检查。他有时被称作'鸭式辩型法'或'结构性子类型化'。接口的作用就是为这些类型命名和为你的
代码或第三方代码定义契约。
下面是一个例子

类型查看器会查看printLabel的调用。printLabel有一个参数，
并要求这个对象的参数有一个名为label类型为string的属性。
我们传入的对象的参数实际上会包含很多属性但是编译器只会检查那些必须的属性是否存在。并且其类型是否匹配。
然而，ts不会这么宽松。

用接口来描述一个label属性且类型为string：

LabelledValue 接口好比一个名字，用来描述上面例子。它代表了有一个
label属性且类型为string的对象。需要注意的是，我们在这离里
interface LabelledValue{
    label:string;
}
function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}
let myObj={size:10,label:'Size 10 Object'};
printLabel(myObj);

ts这个接口 应该就是这样的形式。用来筛选类型
接口 interface 就好比一个要求，用来描述上面例子里的要求。它代表了有一个label属性且类型为string的对象。我们只关注只要传入的对象满足上面提到的必要条件。
那么它就是被允许的。


可选属性
接口的属性不全都是必须的，有部分使用也可以
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquart={color:'white',area:100};
    if(config.color){
        newSquart.color=config.color;

    }
    if(config.width){
        newSquart.area=config.width*config.width;
    }
    return newSquart;
}
let mySquare=createSquare({color:'black'});
//这个函数就是封装一个对象的函数。
//然后只是判断输入的参数是否为字符串？宽度是否为数字？
可选属性的好处
对可能存在的属性进行预定义， 可以捕获引用了不存在的属性时的错误。

只读属性
什么是只读属性？一些对象属性只能在对象刚刚创建的时候修改其值。

只读属性赋值后不可以再被改变了。

interface Point{
    readonly x:number;
    readonly y:number;
}
let p1:Point{x:5,y:10};
p1.x=6;//error;可读属性赋值后 不允许更改
*/
