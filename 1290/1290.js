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
var getDecimalValue = function(head) {
    let tempHead = head;
    let len = -1;
    while(tempHead != null) {
      len += 1;
      tempHead = tempHead.next;
    }
    let res = 0;
    while(head != null) {
      if(head.val === 1) {
        res += Math.pow(2, len);
      }
      len -= 1;
      head = head.next;
    }
    return res;
};