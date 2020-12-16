// const p1 = new Promise((resolve, reject) => {
//     console.log('create a promise'); //直接执行过了
//     resolve('成功了'); //等待执行是才会执行
//   })
  
//   console.log("after new promise");
  
//   const p2 = p1.then(data => {
//     console.log(data) // 
//     // throw new Error('失败了') 
//   })
  
//   const p3 = p2.then(data => {
//     console.log('success', data) // 直接执行
//   }, err => {
//     console.log('faild', err) // 失败了才会继续执行
//   })
// 收集依赖 -> 触发通知 -> 取出依赖执行 
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promisemy {
    constructor(executor){

        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        // 存放成功的回调
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks= [];

        let resolve = (value) => {
            if(this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        }
        
        let reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks= [];

            }
        }

        try{
            executor(resolve, reject);
        }catch(error){
            reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
          onFulfilled(this.value)
        }
    
        if (this.status === REJECTED) {
          onRejected(this.reason)
        }

        if (this.status === PENDING) {
            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onResolvedCallbacks.push(() => {
              onFulfilled(this.value)
            });
      
            // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
            this.onRejectedCallbacks.push(()=> {
              onRejected(this.reason);
            })
          }
      }
}
const promise = new Promisemy((resolve, reject) => {
    setTimeout(() => {
        resolve('成功');
      },1000);
  }).then(
    (data) => {
      console.log('success', data)
    },
    (err) => {
      console.log('faild', err)
    }
)