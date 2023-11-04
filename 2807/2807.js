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
var insertGreatestCommonDivisors = function(head) {
    let current = head;
    while (current && current.next) {
        let newNode = new ListNode(gcd(current.val, current.next.val));
        newNode.next = current.next;
        current.next = newNode;
        current = current.next.next;
    }
    return head;
};

const gcd = (a, b) => {
    if (a == 0 || a == b)
        return b;
    if (b == 0)
        return a;
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}