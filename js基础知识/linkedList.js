/**
 * 
 * 反转一个单链表。
    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 * 
 * */
//  function reverseLinkedList(head){
//      let prv = null, curr = head; 
//      while(curr){
//         let next = curr.next; //存储下一个对象；
//         curr.next = prv; //调整当前节点的指向。
//         prv = curr; //存储为上一个节点；
//         curr = next; // 获取下一个节点使用 作为判断条件。
//      }
//      return prv;
//  }
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** O(n)的时间复杂度；
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverList(head){
    return method2(null, head);
}
function method2(prv, curr){
    if(!curr) return prv;
    let next = curr.next;
    curr.next = prv;
    prv = curr;
    curr = next;
    return method2(prv, curr);
}

function reverseLinked(head){
   let prv = null; curr = head;
   while(curr){
       let next = curr.next; //获取下一个节点暂存；
       curr.next = prv;
       prv = curr;
       curr = next;
   }
   return prv;
}