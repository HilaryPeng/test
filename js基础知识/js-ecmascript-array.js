/*
 总结下array的方法
  方法：splice indexOf forEach map unshift  concat join push pop shift reverse slice toSource toString 
  toLocaleString() valueOf()
  属性： length constructor prototype  
	不太熟悉的 
	var a = new Array[10] //有十项的数组
	join: 把数组所有的元素放入一个字符串
		对于我的理解来说 是变为字符串的一种方法 但是不对数组进行改变 但是括号可以加入一个参数用该参数来分割 
		默认是用,
		let a = [1,2,3]
		a.join() => '1,2,3'
		a.join('!') => '1!2!3'

	pop: 删除并返回数组的最后一个元素 会改变数组 但是返回值为删除的最后一个元素
		简单了 let a = [1,2,3] a.pop() => 3
		像我平常写项目的时候习惯使用 a.splice(a.length-1,0) 其实用 a.pop()即可 
		扩展一下 括号可以传值 表示删除第几位  如果参数很多会取最后一位参数用来指定删除的下标 如果参数不符合要求则删除最后一个元素

	shift: 删除并返回数组的第一个元素
		这个简单 
		let a = [1,2,3] a.shift() => 1   括号里面传值是没有用的
		其实我觉得用splice都可以代替 但是吧 用指定的方法可能更优雅 运算更快 
	reverse：
		颠倒数组的顺序
		var a = [1,3,4]  a.reverse()=> [4,3,1]
	toSource :
		大概是表示对象的源代码 没啥用 大多浏览器不支持 抛弃
	toLocaleString():
		自己理解 转为字符串与join()不传参数时一样吧
	valueOf():
		官方解释 返回数组对象的原始值？ 表示还原么？ 大概是后台调用的时候需要用到原始值吧 不需要记录 没啥用
		valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。
	sort()：
		将数组进行排序 不过貌似不太管用哈 好像是按照二进制排的 没啥用
	slice():
		我不常用 可以接收两个参数 放回指定位置之间的数组
		let a = [1,2,3,4]  a.slice(0,1) => [1]  a => [1,2,3,4] a没有变 所以slice会返回一个新的数组 嗯大概算是可以用来深层次复制数组吧
	
	es5新增方法	es6新增方法 es5也就是平常用的 市面上几乎都支持的 es6也就是去年前年最火的吧 加了很多方法
	es5的：
	下面算是一些语法糖 也可以自己来定义写入
	lasetIndexOf() 与indexOf 
	一样 有的话返回数组的下标 没有的话 就返回-1 不过一个是从前查找 一个是从后查找
	不过可以接收两个参数 第一个表示要查找的元素 第二个表示从某个下标开始

	forEach 
	 经常使用的 没有返回值 一般用来处理某些逻辑上的问题 赋值比较等操作
	map
	 不常使用 但是也有用过 会返回一个数组 就是为每一项运行指定的函数 然后返回值在组成一个数组咯 简单易理解 
	filter 
	 在使用vue的时候使用的过滤函数 会返回一个新的数组  每一项元素运行指定的函数 只把满足条件的返回值 组成一个数组
	every()
	 基本没用过 会遍历数组每一项 如果都符合条件 会返回true 感觉在业务逻辑中可以用来写判断 优雅一点
	 var a = [{
        name:'小红',
        age:18
    },{
        name:'小红',
        age:19
    },{
        name:'小绿',
        age:20,
    },{
        name:'小明',
        age:18
    }]
    console.log(a.every(e=>{
        return e.age>20
    }));
	some ()
	    括号中可以传入一个筛选函数 用来筛选符合的值 只要有一项符合就会返回true
        var a = [{
            name:'小红',
            age:18
        },{
            name:'小红',
            age:19
        },{
            name:'小绿',
            age:20,
        },{
            name:'小明',
            age:18
        }]
        //只要其中有年龄为18的人即可
        // let filterFn = (element,index,array)=>{
        //     console.log(element,index)
        //     return element.age >18
        // }
        console.log(a.some((element,index)=>{
            return element.age>18
        }));
	reduce() reduceRight():
	不常用 用过数组对象的一个去重处理 
		可以仔细研究下
		reduce有四个参数 one two index array 分别是代表 前一个值 当前值 项的索引 和数组对象本身等
	写一个数组对象去重的例子吧
        var a = [{
        name:'小红',
        age:18
        },{
        name:'小红',
        age:19
    },{
        name:'小绿',
        age:20,
    },{
        name:'小明',
        age:18
    }]
    let obj = {};
    let t = a.reduce(function(prev,cur,index,array){
        if(obj[cur.age]){
          console.log(123)
        }else{
            obj[cur.age] = true;
            prev.push(cur);
        }
        return prev
        以上还可以用三元表达式来判断
        // obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
        //return cur;
    },[{name:'李必成',age:20}]) //[]表示prev的类型为数组
    console.log(t)
        嗯 理解一下这几个参数的意义 也就是说
        我首先创建一个空对象
        空对象的键值用去重判断的条件来计算 然后来判断该对象的键值是否存在 也就是 obj[cur.age] 是否有 不存在就将改值作为true
        然后去循环reduce中第二个参数是和forEach中item是一样的 因此 如果为空说明是第一个对象 并没有出现过 如果为true 说明是第二个
        不需要再去push 最后循环结束return出来即可 然后reduce的第二个参数 是指定prev的类型 你看我在后面写了个数组之后 会使用数组的方法
        然后如果数组里有元素 也会默认从该数组开始咯
        官方解释 ：reduce第一个参数为回调函数 （如果为空数组不会触发回调函数）
        回调函数有四个参数   1.previousValue => 初始值或上一次回调函数叠加的值；
                            2. currentValue => 本次回调（循环）将要执行的值；
                            3. index =>“currentValue”的索引值；
                            4. arr => 数组本身；
                   第二个参数initialValue ，用来声明回调函数的preveiousValue的类型和初始值;
         嗯 除了去重等 还有累加 扁平化多维数组等操作
        var a = [[0, ['a','b']], [2, 3], [4, 5]];
            let t = a.reduce(function(a,b){
                return a.concat(b)
            },[]);
            //事实证明 N层扁平化数组是不对的==
            console.log(t);
    es6中的一些方法：稍微总结下
    ...:
        扩展符
        1. var a = [1,2,3]
            console.log(...a) => 1 2 3
            只适用于参数 其他倒不怎么适合也就是说 将数组的每个元素变为参数x,y,z了
            例如：
                var a = [1,2,3];
                function add(x,y,z){
                    return x+y+z
                }
                let b = add(...a); =>6
        2. 用于复制数组
         var a = [1,3,4]  let b = [...a]  b[0] = 8; b=>[8,3,4] a=>[1,3,4] 为深层次的复制对象
        3.用于合并数组
           替代concat()
           var a = [1,2,3] , b = [4,5,6] ;let c = [...a,...b] c=>[1,2,3,4,5,6];
        4.与解构赋值结合（我不是太深入了解解构赋值 所以暂放）
        5.将字符串转为数组
        var a = 'hello' let b = [...a] b=>[ 'h', 'e', 'l', 'l', 'o' ];
        6.其他还有一些 可以参考es6的书籍 不深入探究
     array.form():
        1.可以将两类对象转为真正的数组 类数组对象和可遍历的对象
         常见的类数组对象 为dom操作返回的NodeList的集合 还有函数内部的arguments对象
        2.可以用来复制新的数组
     Array.of():
        可以用来将一组值转换为数组
        例如 array.of(1,2,3);
        console.log(Array.of(1,2,3)) => [1,2,3]
     copyWithin():
        将指定位置的成员复制到其他位置，然后返回当前数组 有三个参数
        target 从该位置开始替换数据;
        start 从该位置开始读取数据；默认为0 ；为负可表示倒数
        end 到该位置停止读取数据
     find():
        执行一个函数  循环每一个元素用来筛选符合该函数的值  如果有匹配的则会返回第一个匹配到的值 之后就停止了 如果没找到则会
        返回undefined
     findIndex():
        和find方法类似 如果没有找到 那么就会返回-1
      fill():
      我的理解就是将所有的数组元素都替换为指定的元素 也可以加入第二个第三个参数 用于指定位置开始和结束
      es6的遍历方法
      entries(),keys(),values():
      遍历键值对 遍历键 遍历值 不太懂 建议放到iterator遍历器对象中理解学习
      includes():
       用来判断该数组中是否有该元素 indexOf 其中运用严格运算符=== 则会对NAN进行误判 而includes则不会出现这个问题
       其中需要注意的是 es5 es6中对空位的处理不一致 es5中可能会跳过空位 而es6中会把空位转为undefined
       so我们写的时候应该避免出现空位的问题

*/
