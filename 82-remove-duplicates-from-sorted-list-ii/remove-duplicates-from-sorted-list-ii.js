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
var deleteDuplicates = function(head) {
    let slow = head;
    let fast = head ? head.next : null;
    let prevNode = null;

    while (slow !== null && fast !== null) {
        if (slow.val === fast.val) {
            while (fast !== null && slow.val === fast.val) {
                fast = fast.next;
            }
            if (prevNode === null) {
                head = fast;
            } else {
                prevNode.next = fast;
            }
            slow = fast;
            fast = fast ? fast.next : null;
        } else {
            prevNode = slow;
            slow = slow.next;
            fast = fast ? fast.next : null;
        }
    }

    return head;
};
