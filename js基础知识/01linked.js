/**
 * 
 * 反转一个单链表。
    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 * 
 * */

 function reverseLined(head){
    let prv = null, curr = head;
    while(curr){
        let tem = curr.next; //暂存下一个节点;
        // curr.next = prv; //当前节点反转
        // prv = curr; //设置prv为上一个节点
        // curr = tem; //设置传入的下一个几点
        [curr.next,prv, curr] = [prv, curr, tem]; //解构赋值
    }
 }
 var id=21;
 function foo(){
    setTimeout(()=>{console.log('id:',this.id)},100);
 }

 foo.call({ id: 42 });
 function foo2(){
     setTimeout(function(){
         console.log(this.id)
     },100)
 };
 foo2();
 foo2.call({id:42});