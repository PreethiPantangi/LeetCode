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
var removeNodes = function(head) {
    let stack = [];

    while(head !== null) {
        while(stack.length > 0 && head.val > stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(head.val);
        head = head.next;
    }
    while(stack.length) {
        head = new ListNode(stack.pop(), head);
    }
    return head;
};

var addNodeToLinkedList = (head, value) => {
    if(head !== null) {
        let tempHead = head;
        while(tempHead.next !== null) {
            tempHead = tempHead.next;
        }
        tempHead.next = new ListNode(value);
    } else {
        head = new ListNode(value);
    }
    return head;
}