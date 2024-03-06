/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) {
        return false;
    }
    let slow = head;
    let fast = head.next ? (head.next.next ? head.next.next : null) : null;
    while(slow !== null && fast !== null) {
        console.log(slow.val, fast.val)
        if(slow.next !== fast.next) {
            slow = slow.next;
            fast = fast.next ? (fast.next.next ? fast.next.next : null) : null;
        } else {
            return true;
        }
    }
    return false;
};