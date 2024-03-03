/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let tempHead = head;
    while(tempHead != null) {
        len += 1;
        tempHead = tempHead.next;
    }
    let elemToRemove = len - n;
    
    if (elemToRemove === 0) {
        return head.next;
    }

    let count = 1;
    tempHead = head;
    while(tempHead != null && elemToRemove != count) {
        tempHead = tempHead.next;
        count += 1;
    }
    tempHead.next = tempHead.next ? (tempHead.next.next ? tempHead.next.next : null)  : null;
    return head;
};