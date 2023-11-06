/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let len = 0;
    tempHead = head;
    while(tempHead != null) {
        len += 1;
        tempHead = tempHead.next; 
    }

    if(len === 0 || len === 1 || k === 0 || k % len === 0) {
        return head;
    } else {
        let splitAtPos = len - (k % len);
        let count = 0;
        tempHead = head;


        newHead = newTempHead = null;
        while(tempHead != null && count != splitAtPos) {
            let newNode = new ListNode(tempHead.val);
            if(newHead != null) {
                newHead.next = newNode;
                newHead = newHead.next;
            } else {
                newHead = newNode;
                newTempHead = newNode;
            }
            count += 1;
            tempHead = tempHead.next;
        }
        let temp = tempHead;
        while(temp && temp.next != null) {
            temp = temp.next;
        }
        temp.next = newTempHead;
        return tempHead;
    }
};