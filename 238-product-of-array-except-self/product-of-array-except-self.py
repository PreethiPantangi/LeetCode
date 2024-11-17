class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        left = [0] * length
        right = [0] * length
        answer = [0] * length

        left[0] = 1
        for i in range(1,len(nums)):
            left[i] = left[i-1] * nums[i-1]
            
        right[length-1] = 1
        for i in reversed(range(length-1)):
            right[i] = right[i+1] * nums[i+1]

        for i in range(length):
            answer[i] = left[i] * right[i]
        return answer