/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let start = end = list1;
    while(a-1) {
        a -= 1;
        start = start.next;
    }
    while(b) {
        b -= 1;
        end = end.next;
    }
    start.next = list2;
    let tempHead = list2;
    while(tempHead && tempHead.next !== null) {
        tempHead = tempHead.next;
    }
    tempHead.next = end.next;
    return list1;
};