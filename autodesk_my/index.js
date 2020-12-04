/**
 * callback parameter
 */

 function invokeFn(name){
     console.log(name,this);
 }
 function callBack(fn){
    // (function(fn){
    //     console.log(fn);
    //     fn() 
    // })(fn);
    !function(fn){
        return fn()
    }(fn)
 }
 callBack(invokeFn('zhipeng'));