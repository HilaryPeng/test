/**
 * 判断null undefined 
 * symbol 
 * 引用对象 互相引用
 * 数组兼容
 * @param {*} obj 
 * @param {*} hash 
 */
function cloneDeep(source, hash = new WeakMap()){
    //
    if(isObject(source)){
        return source;
    }
    if(hash.has(source)){
        return hash.get(source);
    }
    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target);
    Reflect.ownKeys(key => {
        if(isObject(source[key])){
            target[key] = cloneDeep(source[key], hash);
        }else{
            target[key] = source[key]
        }
    })
    return target;
}
function isObject(obj){
    // return Object.prototype.toString.call(obj) === '[object object]';
    return typeof obj === 'object' && obj!=null;
}
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
console.log(a);
console.log(cloneDeep(a));