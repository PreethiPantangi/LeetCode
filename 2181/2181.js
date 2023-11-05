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
var mergeNodes = function(head) {
    let newHead = null;
    let tempNewHead = null;
    while(head !== null) {
        if(head.val === 0) {
            head = head.next;
        } else {
            let sum = 0;
            while(head != null && head.val != 0) {
                sum += head.val;
                head = head.next;
            }
            let newNode = new ListNode(sum);
            if(newHead != null) {
                newHead.next = newNode;
                newHead = newHead.next;
            } else {
                newHead = newNode;
                tempNewHead = newHead;
            }
        }
    }
    return tempNewHead;
};