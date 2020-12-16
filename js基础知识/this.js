/**
 * 这里深刻讲解this 箭头函数, call apply bind等； call(this的指向,paramers)
 * 大多情况下, this是在运行时绑定，也就是调用函数的时候绑定的。 每次函数调用时this的值有可能不同。 bind 不考虑函数的调用
 * es2015 箭头函数
 * 在函数内部，this的值取决于函数被调用的方式。
 * 如果要想把 this 的值从一个环境传到另一个，就要用 call 或者apply 方法，如下方的示例所示。
 * call(this的指向, 参数, ...)
 * apply(this的指向, [...参数])
 * bind(this的指向)会创建一个与f具有相同函数体和作用域的函数，this被永久的固定到了这个函数里。
 * 
 * 
 * 
 * 
 * 调用位置就是函数在代码中被调用的位置（而不是声明的位置）。
 * 
 * 
 * 
 * 
 * this的绑定规则
 * 1.默认绑定 // 默认指向全局对象。 无法应用其他规则时的默认规则。 严格模式下 this => undefined 非严格模式 this=>window
 * 
 * 
 * 2.隐式绑定 // 当函数引用有上下文时， 隐式绑定规则会把函数中的this 绑定到这个上下文。 对象属性引用链中只有上一层或者说最后一层在调用中起作用。
      function foo() {
          console.log( this.a );
      }

      var obj = {
          a: 2,
          foo: foo
      };

      obj.foo();
    会有一种情况就是 隐式丢失。 所以会默认指向window 或者是undefined

    function foo() {
        console.log( this.a );
    }

    var obj = {
        a: 2,
        foo: foo
    };

    var bar = obj.foo; // 函数别名 //这里进行了一次引用赋值 造成this丢失
    // bar = > function foo(){console.log(this.a)};  bar() => this.a => global

    var a = "oops, global"; // a是全局对象的属性

    bar(); // "oops, global"

    当进行隐式绑定时，如果进行一次引用赋值或者传参操作，会造成this的丢失，使this绑定到全局对象中去。
    //穿参丢失
    function foo() {
      console.log( this.a );
    }

    function doFoo(fn) {
        // fn其实引用的是foo
        
        fn(); // <-- 调用位置！
    }

    var obj = {
        a: 2,
        foo: foo
    };

    var a = "oops, global"; // a是全局对象的属性

    doFoo( obj.foo ); // "oops, global"

    // ----------------------------------------

    // JS环境中内置的setTimeout()函数实现和下面的伪代码类似：
    function setTimeout(fn, delay) {
        // 等待delay毫秒
        fn(); // <-- 调用位置！
    }

 * 3. 显式绑定  使用 call apply bind 
    无法解决绑定丢失的问题
    解决方案： 使用一个函数进行包裹 强行绑定某个对象。 使用一个辅助函数可重复使用。
    function foo(something) {
      console.log( this.a, something );
      return this.a + something;
    }

    var obj = {
        a: 2
    };

    var bar = function() {
        return foo.apply( obj, arguments );
    };

    var b = bar( 3 ) 

    JS许多内置函数提供了一个可选参数，被称之为“上下文”（context），
    其作用和bind(..)一样，确保回调函数使用指定的this。这些函数实际上通过call(..)和apply(..)实现了显式绑定。

 * 4. new 绑定
 * 5. 构造函数绑定。
 * 
 * 
 * 
 * 箭头函数，箭头函数无法使用上述四条规则，而是根据外层（函数或者全局）作用域（词法作用域）来决定this。 
 * 箭头函数体内的this对象，就是定义该函数时所在的作用域指向的对象，而不是使用时所在的作用域指向的对象。
 * foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行)
 * ES6之前和箭头函数类似的模式，采用的是词法作用域取代了传统的this机制。 
 * 
#
 * 
 * 
 * 
 */
const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
  console.log(test.func());



  var obj = {a: 'Custom'};
  var a = 'Global';
  function whatsThis() {
    return this.a;  
    // Global
  }
  whatsThis();         
  whatsThis.call(obj);   //Custom
  whatsThis.apply(obj) //Custom




  function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  add.call(o, 5, 7);  // this => {a:1, b:3} 1+3+5 + 7= > 16
  
  add.apply(o, [10, 20]); // 10 + 20 + 1 + 3 = 34




  function bar() {
    console.log(Object.prototype.toString.call(this));
  }
  
  bar.call(7);  //Number = > [Object, Number] 
  bar.call('foo'); //String [Object String]
  bar.call(undefined); //[Object, Global] 如果用作 this 的值不是对象，则会被尝试转换为对象。null 和 undefined 被转换为全局对象。





  function f(){
    return this.a;
  }
  
  var g = f.bind({a:"azerty"});
  console.log(g());  // azerty this => a
  
  var h = g.bind({a:'yoo'});  // this =>  azerty bind只生效一次。
  console.log(h());  // yoo;
  
  var o = {a:37, f:f, g:g, h:h}; //
  console.log(o.a, o.f(), o.g(), o.h()); // o.a 37 o.f() => 37 // azerty // azerty



  //箭头函数
  var globalObject = this;
  var foo = (() => this);
  /**
   * function foo(){
   *    return this
   * }
   */
  var foo2 = function(){
      return this;
  }
  console.log(foo() === globalObject); //true
  console.log(foo2() === globalObject) // true



  var obj = {foo: foo};
  var obj2 = {foo2: foo2};
  console.log(obj.foo() === globalObject);  // obj.foo() this => obj
  console.log(obj2.foo2() === obj2);  // obj.foo2 this = obj;


  console.log(foo.call(obj) === globalObject); // this => obj; // true

  // 尝试使用bind来设定this
  foo = foo.bind(obj);
  console.log(foo() === globalObject); // true
  //foo 的 this 被设置为他被创建时的环境这同样适用于在其他函数内创建的箭头函数：这些箭头函数的this被设置为封闭的词法环境的



  var obj = {
    bar: function() {
      var x = (() => this);
      return x;
    }
  };

  // 箭头函数的this 永远指向外层的this的运行环境  也就是谁调用了obj.bar();
  var obj2 = {
      bar: function(){
          var x = function(){
              return this;
          }
      }
  };
  
  var fn = obj.bar(); // obj; 
  console.log(fn() === obj); // true
  var fn2 = obj.bar; //obj.bar = function()() == window;
  console.log(fn2()() == window);

  var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };
  
  console.log(o.f()); // 37 o.f() f() => this = > o
  


  
  var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); //12
            console.log(this);  //b
        }
    }
  }
  //调用
  o.b.fn(); 
  

  var o = {
    a: 10,
    b:  {
        fn: function(){
            console.log(this.a); 
            console.log(this);   
        }
    }
  }
  //调用
  o.b.fn(); 
  
  
  var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); 
            console.log(this);   
        }
    }
  }
  var j = o.b.fn; //只是将b对象下的方法赋值给j，并没有调用
  j(); // => window.j(); = > undefined; this => window
  
  var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
        this.x = this.x + x; 
        this.y = this.y + y;
        console.log(this.x); 
        console.log(this.y); 
    } 
  }; 
  point.moveTo(1, 1)
  

  function someFun(x) { 
    this.x = x; 
  } 
  someFun(5);
  console.log(x)
  
  
  
  var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
       // 内部函数
       var moveX = function(x) { 
           this.x = x;
       }; 
       // 内部函数
       var moveY = function(y) { 
           this.y = y;
       };
       moveX(x); 
       moveY(y);  
    }
  }; 
  point.moveTo(1, 1); 
  console.log(point.x); 
  console.log(point.y);
  
  
  
  var a = 10;
  var foo = {
      a: 20,
      fn: (function(){ // window.fn();
          console.log(this); 
          console.log(this.a); 
      })()
  }
  
  var a = 10;
  var oTimer1 = setInterval(function(){
      var a = 20;
      console.log(this.a); 
      clearInterval(oTimer1);
  },100);
  
  
  (function(){
    console.log(this);  //window
  })();
  function Foo(){
    this.bar = function(){
       console.log(this) //new call() Foo.call(this, jgjj)
    }
  }
  var foo = new Foo();
  foo.bar();
  
  
  var a = 10;
  var foo = {
      a: 20,
      fn: function(){
          console.log(this.a);
      }
  };
  var bar ={
      a: 30
  }
  foo.fn.apply(); // 10;
  foo.fn.apply(foo); // 20
  foo.fn.apply(bar); //30
  
  
  var x = 10;
  var foo = {
     x : 20,
     bar : function(){
         var x = 30;
         console.log(this.x)
       
     }
  };
  foo.bar();  //20
  let t = foo.bar;
  t();
  (foo.bar)(); //20
  (foo.bar = foo.bar)(); // 10
  (foo.bar,foo.bar)(); // 10 



var num = 1;
var myObject = {
    num: 2,
    add: function() {
        this.num = 3;
        (function() {
            console.log(this.num); //  隐士绑定到window中 1  window.num = 4;
            this.num = 4; // 
        })();
        console.log(this.num); 
    },
    sub: function() {
        console.log(this.num)
    }
}
myObject.add(); // myObject.num = 3; //  1,  3  
console.log(myObject.num); // 3
console.log(num);  // 4
var sub = myObject.sub; //
sub();  //4 



var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name) 
    }
  },
  show4: function () {
    return () => console.log(this.name) 
  }
}
var person2 = { name: 'person2' }

person1.show1()  // 隐式绑定  person1 
person1.show1.call(person2)  // 显式绑定 person2

person1.show2()  // window
person1.show2.call(person2) //  window

person1.show3()() // 丢失了  window
person1.show3().call(person2)  //  person2
person1.show3.call(person2)()   //window

person1.show4()()  // person1 //逐级查找
person1.show4().call(person2)  // person1 //
person1.show4.call(person2)() // person2 





var name = 'window'

function Person (name) {
  this.name = name;
  this.show1 = function () {
    console.log(this.name)
  }
  this.show2 = () => console.log(this.name)
  this.show3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.show4 = function () {
    return () => console.log(this.name)
  }
}

var personA = new Person('personA')
var personB = new Person('personB')

personA.show1() // personA
personA.show1.call(personB) // personB

personA.show2() // personA
personA.show2.call(personB) //personA

personA.show3()() // widnow
personA.show3().call(personB) // personB
personA.show3.call(personB)() // window

personA.show4()() //personA
personA.show4().call(personB) //personA
personA.show4.call(personB)() //personB



var obj = {
  say: function () {
      function _say() {
          console.log(this);
      }
      console.log(obj); //
      return _say.bind(obj);
  }()
}
obj.say(); 


function bar() {
    var myName = "极客世界"
    let test1 = 100
    if (1) {
        let myName = "Chrome浏览器"
        console.log(test)
    }
}
function foo() {
    var myName = "极客邦"
    let test = 2
    {
        let test = 3
        bar()
    }
}
var myName = "极客时间"
let myAge = 10
let test = 1
foo()



setTimeout(function(){
  console.log('开始定时器')  //4
});

new Promise(function(resolve){
  console.log('创建promise啦'); 1
  for(var i = 0; i < 10000; i++){
      i == 99 && resolve();
  }
}).then(function(){
  console.log('执行then方法咯') 
});
console.log('代码全都执行完啦');
