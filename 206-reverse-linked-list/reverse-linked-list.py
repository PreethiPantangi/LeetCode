# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []
        temp_head = head 
        while temp_head:
            stack.append(temp_head.val)
            temp_head = temp_head.next
        temp_head = head
        while temp_head:
            temp_head.val = stack.pop()
            temp_head = temp_head.next
        return head
