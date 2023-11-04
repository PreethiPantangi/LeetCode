/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let len = 0;
    let tempHead = head;
    while(tempHead != null) {
        len += 1;
        tempHead = tempHead.next;
    }
    let count = 0;
    let mid = parseInt(0 + (len - 0)/2);
    while(count != mid && head != null) {
        head = head.next;
        count += 1;
    }
    return head;
};