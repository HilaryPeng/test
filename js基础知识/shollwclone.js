/**
 * 1. 忽略undefine
 * 2. 忽略symbol
 * 3. 不能序列化函数
 * 4. 不能解决循环引用的对象
 * 5. 不能正确处理new Date()
 * 6. 不能处理正则
 * undefined, symbol, 函数 会直接忽略。
 */


// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//    		d: 3
//     }
// }
// obj.a = obj.b;
// obj.b.c = obj.a;
// 循环引用会报错


//new Date 情况下，转换结果不正确。


//Object.assign(target, ...source);
//我们知道浅拷贝就是拷贝第一层的基本类型值，以及第一层的引用类型地址。
//symbol undefined null 都可以被复制
// 原生Object不可枚举性。
let a = {
    name: "muyiy",
    age: 18
}
let b = {
    b1: Symbol("muyiy"),
    b2: null,
    b3: undefined
}
let c = Object.assign(a, b);
console.log(c);
//Object.getOwnPropertyDescriptor(Object, "assign");  enumerable: false 不可枚举 Object.propertyIsEnumerable("assign"); //是否可以枚举
//实现一个浅拷贝
if(typeof Object.assign2 != 'function'){
    Object.defineProperty(Object, "assign2", {
        value: function(target){
            if(target == null) {
                throw new TypeError('Connot convert undefined or null to object');
            }
            var to = Object(target);
            for( var index = 1; index<arguments.length; index++){
                var nextSource = arguments[index];
                if(nextSource != null){
                    for(var nextKey in nextSource) {
                        if(Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    })

}


if (typeof Object.assign2 != 'function') {
    // Attention 1
    Object.defineProperty(Object, "assign2", {
      value: function (target) {
        'use strict';
        if (target == null) { // Attention 2
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        // Attention 3
        var to = Object(target);
          
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
  
          if (nextSource != null) {  // Attention 2
            // Attention 4
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

