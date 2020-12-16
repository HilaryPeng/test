const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const resolvePromise = (promise2, x, resolve, reject) => {
    if(promise2 == x) {
        // return x;
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    let called;
    if((typeof x === 'object' && x != null) || typeof x === 'function'){
        try {
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,y =>{
                    if (called){return};
                    called = true;
                    resolvePromise(promise2, y, resolve, reject); 
                }, r => {
                    if(called) return ;
                    called = true;
                    reject(r);
                })
            }else {
                resolve(x);
            }
        }catch(e){
            if(called) return ;
            called = true;
            reject(e);
        }
    }else{
        resolve(x);
    }
}

class Promisemy {
    constructor(executor){
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallBacks = [];
        this.onRejectedCallBacks = [];

        let resolve = (value) => {
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallBacks.forEach(fn=>fn())
            }
        }

        let reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallBacks.forEach(fn=>fn())
            }
        }
        try{
            executor(resolve, reject)
        }catch(error){
            reject(error)
        }
    }

    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=> v;
        onRejected = typeof onRejected === 'function' ? onRejected : error => {throw error};

        let promise2 = new Promisemy((resolve, reject)=> {
            if(this.status === FULFILLED){
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    }catch(error){
                        reject(error);
                    }
                }, 0)
            }
            if(this.status === REJECTED){
                setTimeout(()=> {
                    try {
                        let  x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }catch(error){
                        reject(error);
                    }
                }, 0)
            }

            if(this.status === PENDING) {
                this.onResolvedCallBacks.push(() => {
                    setTimeout(()=> {
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        }catch(e){
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallBacks.push(()=> {
                    setTimeout(() => {
                      try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject)
                      } catch (e) {
                        reject(e)
                      }
                    }, 0);
                });
                
            }
        })
        return promise2;
    }
}
const promise = new Promisemy((resolve, reject) => {
    reject('失败');
  }).then().then().then(data=>{
    console.log(data);
  },err=>{
    console.log('err',err);
  })


  const promise = new Promise(function (resolve, reject) {
    resolve('ok'); // 
    setTimeout(function () { throw new Error('test') }, 0)
  });
  promise.then(function (value) { console.log(value) }); // ok; 


  const person = observable({
    name: '张三',
    age: 20
  });
  
  function print() {
    console.log(`${person.name}, ${person.age}`)
  }
  
  observe(print);
  person.name = '李四';


const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}