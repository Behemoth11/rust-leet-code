/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    let carry = 0;
    let head = {val: 0, next: null};
    let current = head;

   while ( l1 || l2 ){
       let val1 = l1?.val ? l1.val : 0;
       let val2 = l2?.val ? l2.val : 0;
       
       let total = val1 + val2 + carry;     
       carry = Math.floor(total/10);
       
       current.next = l1 || l2;
       current.next.val = total - carry * 10;
       
       current = current.next;
       l1 = l1?.next;
       l2 = l2?.next;
   }
   
   if (carry > 0){
       current.next = {val: 1, next: null}
   }
   
   return head.next;
};

const createListNode = function ( arr){

    let head = {val: 0, next: null};

    let current = head;

    arr.forEach(num => {
        current.next = { val: num, next: null };
        current = current.next;
    })

    return head;
}




const node_1 = createListNode([2,4,3]);
const node_2 = createListNode([5,6,4]);

console.log(4)
console.log(addTwoNumbers(node_1, node_2))

