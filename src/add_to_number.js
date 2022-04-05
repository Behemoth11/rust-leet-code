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
    
    let head = l1;
    
    while (l1){
        if (!l2) {
            l2 = {val: 0, next: null}
        }
        
        let carry = 0;
        let node_addition = l1.val + l2.val;
        
        if ( node_addition >= 10 ){
            node_addition = node_addition % 10;
            carry = 1;
        }
        
        l1.val = node_addition;
        
        if (l1.next) l1.next.val += carry;
        
        else {
            if (carry == 1 ){
                l1.next = {
                    val: 1,
                    next: null
                }
            }
            else {
                l1.next = l2.next;
                break;
            }
        }
        
        
        l1 = l1.next;
        l2 = l2.next;
        
    }
    
    
    
    return head;
};