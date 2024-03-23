/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    second = slow.next;
    prev = slow.next = null;

    let current = second;
    let next = prev = null;
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    while (prev !== null) {
        temp1 = head.next;
        temp2 = prev.next;
        head.next = prev;
        prev.next = temp1;
        head = temp1;
        prev = temp2;
    }
};