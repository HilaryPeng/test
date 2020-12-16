/**
 * observer 
 * suscribe notice
 */

let obj = {
    eventList : [],
    suscribe:function(fn){
        this.eventList.push(fn);
    },
    notice:function(message){
        this.eventList.forEach(fn => {
            fn(message);
        });
    }
}

console.log(obj);
function message1(message){
    console.log(message+1);
}
function message2(message){
    console.log(message + 2);
}
obj.suscribe(message1);
obj.suscribe(message2);
obj.notice('apeng');