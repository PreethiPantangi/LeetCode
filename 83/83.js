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
    let tempHead = head;
    let hashMap = [];
    let prevHead = head;
    while(tempHead != null) {
        if(hashMap.includes(tempHead.val)) {
            prevHead.next = tempHead.next
        } else {
            hashMap.push(tempHead.val) 
            prevHead = tempHead
        }
        tempHead = tempHead.next;
    }
    return head;
};