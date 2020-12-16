let a = {
    name: "advanced",
    age: 18
}
let b = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let c = Object.assign(a, b);
console.log(c);
/**
 * c = {
 *      name: 'muyiy',
 *      age: 18,
 *      book: 
 * }
 */

console.log(a === c);// true


// 第二步
b.name = "change";
b.book.price = "55";
console.log(b);
console.log(a);



let a = {
    name: "muyiy",
    age: 18,
    b1:"",
    b2:"",
    b3:""
}
let b = {
    b1: Symbol("muyiy"),
    b2: null,
    b3: undefined
}
let c = Object.assign(a, b);
console.log(c);
console.log(a === c); // true

//Object.defineProperty

// 浅拷贝拷贝
function isObject(obj) {
	return typeof obj === 'object' && obj != null;
}
function cloneDeep(source, hash = new WeakMap()){
    if (!isObject(source)) return source;
    if (hash.has(source)) return hash.get(source); 
    var target = Array.isArray(source) ? [] : {};
    hash.set(source, target); 
    //symbol
    let symKeys = Object.getOwnPropertySymbols(source); // 查找
    if (symKeys.length) { // 查找成功	
        symKeys.forEach(symKey => {
            if (isObject(source[symKey])) {
                target[symKey] = cloneDeep(source[symKey], hash); 
            } else {
                target[symKey] = source[symKey];
            }    
        });
    }
    //
    for (var key in source){
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(typeof source[key] === 'object'){
                target[key] = cloneDeep(source[key], hash);
            }else{
                target[key] = source[key];
            }   
            
        }
    }
    return target;
}

// 深拷贝
function cloneDeep5(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 广度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}