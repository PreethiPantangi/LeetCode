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
var deleteMiddle = function(head) {
    let len = 0;
    let tempHead = head;
    while(tempHead !== null) {
        len += 1;
        tempHead = tempHead.next;
    };
    if(len === 1) {
        head = null;
        return head;
    } else {
        let middlePos = Math.floor(len/2);
        tempHead = head;
        let index = 0;
        while(index < middlePos-1) {
            tempHead = tempHead.next;
            index += 1;
        }
        if(tempHead.next) {
            if(tempHead.next.next) {
                tempHead.next = tempHead.next.next;
            } else {
                tempHead.next = null;
            }
        } else {
            tempHead.next = null;
        }
        return head;
    }
};