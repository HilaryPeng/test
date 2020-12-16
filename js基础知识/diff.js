/**
 * 输入 [a,b,c] [t,b,a,x]
 * 输出 a remove index 2
 *      c  remove
 *  t append index 0
 *  x append index 3
 * 实现一个diff(oldData, newData){
 * }
 */
let a = ["a", "b", "c"];
let b = ["t", "b", "a", "x"];

 function diff(oldData, newData){
     let newHashMap = new Map();
    newData.forEach((data, index) => {
        newHashMap.set(data,index);   
    });
    console.log(arguments)

    oldData.forEach((item, index) => {
        if(newHashMap.has(item)){
            console.log(`${item} remove index${newHashMap.get(item)}`);
            if(newHashMap.get(item) === index){
                console.log(`${item} not remove`);
            }
            newHashMap.delete(item);
        }else{
            // 没有 表示shanchu le 
            console.log(`${item} remove`)
        }
    })
    if(newHashMap.size > 1){
        for (let [key,value] of newHashMap){
            console.log(`${key} append index ${value}`)
        }
    }
    // 当循环结束之后 需要增加的元素都要列出。
 }
 diff(a, b)
 o(n);


 /**
  * 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
  */

  function debounce(func, wait){
      let timeout;
      return function(){
          let context = this;
          let args = arguments;
          if(timeout){
              clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            func.apply(context, args)
          }, wait);
      }
  }
  /**
   * 节流
   * throttle
   */
  function throttle(func, wait){
      let previous = 0;
      return function(){
          let now =  Date.now();
          let context = this;
          let args = arguments;
          if(now - previous > wait){
            func.apply(context, args);
            previous = now;
          }
      }
  }

function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}