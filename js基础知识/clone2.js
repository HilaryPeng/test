/**
 * 1.undefined 不会复制。
 * 1.symbol 也不会复制
 * 引用类用的一个问题
 * 
 */
var sym = Symbol.for("comet");
let test = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: [0, 1, 2],
    func: function() {
        console.log('我是一个函数')
    },
    [sym]: 'Symbol',
    date: new Date(0),
    reg: new RegExp('/我是一个正则/ig'),
    err: new Error('我是一个错误')
}
//null undefined 引用对象 
function clone1(obj){
    return JSON.parse(JSON.stringify(obj));
}
console.log(test);  
// console.log(clone1(test));

function cloneDeep(obj){
    if(isObject())
    let newObj = {};
    for(let key in obj){ 
        //拿不到symbol; array object 要分开
        // console.log(key) 
        if(key){
            if(typeof obj[key] === 'object'){
                newObj[key] = cloneDeep(obj[key])
            }else{
                newObj[key] = obj[key];
            }
        }
    }
    console.log(newObj);
    return newObj
}

var cloneTest = cloneDeep(test);
cloneTest.arr[1] = 100;
console.log(test);  