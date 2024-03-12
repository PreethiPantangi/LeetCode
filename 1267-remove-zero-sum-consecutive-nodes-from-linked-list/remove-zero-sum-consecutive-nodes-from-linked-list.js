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
var removeZeroSumSublists = function(head) {
    let dummyNode = new ListNode(0, head);
    let start = dummyNode;
    while(start !== null) {
        let prefix = 0;
        let end = start.next;
        while(end !== null) {
            prefix += end.val;
            if(prefix === 0) {
                start.next = end.next;
            }
            end = end.next;
        }
        start = start.next;
    }
    return dummyNode.next;
};