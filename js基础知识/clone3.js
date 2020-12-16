function cloneShallow(source, hash = new WeakMap()){
    if(!isObject(source)){
        return source 
    }
    //判断hash表中是否存在该对象
    if(hash.has(source)){
        return hash.get(source); // 同时可以解决引用丢失。 即所有的对象都可以指向同一个对象
    }

    //检验target 是否为数组
    var target = Array.isArray(source) ? [] : {};
    hash.set(source, target);


    //复制symbols的情况
    let symkeys = Object.getOwnPropertySymbols(source);
    if(symkeys.length){
        symkeys.forEach(symkey => {
            if(isObject(source[symkey])){
                target[symkey] = cloneShallow(source[symkey], hash);
            } else {
                target[symkey] = source[symkey];
            }
        })
    }
    //
    for(let key in source){
        if(Object.prototype.hasOwnProperty.call(source, key)) {
            if(isObject(source[key])){
                target[key] = cloneShallow(source[key],hash)
            }else{
                target[key] = source[key]
            }
        };
    }
    return target
}
/**
 * 正则与时间对象赋值的问题。
 */
let a = {
	name: "muyiy",
	a1: undefined,
	a2: null,
	a3: 123,
	book: {title: "You Don't Know JS", price: "45"},
}
a.circleRef = a;
a.date = new Date();
a.next = new RegExp('/gfdgfd/')
var sym1 = Symbol("a"); // 创建新的symbol类型
var sym2 = Symbol.for("b")
a[sym1] = "localSymbol";
a[sym2] = "globalSymbol";
console.log(a)
console.log(cloneShallow(a));
/**
 * 没有对传入参数进行校验，传入 null 时应该返回 null 而不是 {}
 * 对于对象的判断逻辑不严谨，因为 typeof null === 'object'
 * 没有考虑数组的兼容
 * 
 *  但是用在这里并不合适，因为我们要保留数组这种情况，所以这里使用 typeof 来处理。
 * 
 * 
 * 解决的问题 考虑对象的相互引用。 使用哈希表来存储 已经拷贝过的对象。 当检测对象存在哈希表中，取出该值返回即可。
 * 
 * 拷贝symbol 即可
 * 
 * 
 * 
 */
//浅拷贝

//判断是否是一个对象
function isObject(obj){
    return Object.prototype.toString.call(obj) === '[object object]';
}
function isObject(obj){
    return typeof obj === 'object' && obj!== null;
}

// 这里使用了 Reflect.ownKeys() 获取所有的键值，同时包括 Symbol，对 source 遍历赋值即可。

function cloneDeep(source, hash = new WeakMap()){
    if(isObject(source)){
        return source;
    }
    if(hash.has(source)){
        return has.get(source);
    }
    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target);

    Reflect.ownKeys(source).forEach(key => {
        if(isObject(source[key])){
            target[key] =  cloneDeep(source[key]);
        }else{
            target[key] = source[key];
        }
    })
    return target;
}
console.log(cloneDeep(a))


/**
 * 总结:
 *  1. undefined null  symbol 引用对象 正则 时间对象 互相引用的对象 
 *  2. 
 */