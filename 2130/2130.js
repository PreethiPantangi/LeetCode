/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let n = 0;
    let res = -1;
    let values = [];
    let tempHead = head;
    while(tempHead != null) {
        n += 1;
        values.push(tempHead.val);
        tempHead = tempHead.next;
    }
    let i = 0;
    let twin;
    let condition = (n/2) - 1;
    while(head != null) {
        twin = n - 1 - i;
        let sum = head.val;
        if(i >= 0 && i <= condition) {
            sum += values[twin];
        }
        res = Math.max(res, sum);
        head = head.next;
        i += 1;
    }
    return res;
};