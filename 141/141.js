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
    let visitedNodes = [];
    while(head != null) {
        if(visitedNodes.includes(head)) {
            return true;
        } else {
            visitedNodes.push(head);
            head = head.next;
        }
    }
    return false;
};