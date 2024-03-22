/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let vals = '';
    while(head !== null) {
        vals += head.val;
        head = head.next;
    }
    return vals === vals.split("").reverse().join("");
};