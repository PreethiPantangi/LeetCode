import math 

class Solution:

    def merge(self, nums, left, mid, right):
        left_len = mid - left + 1
        right_len = right - mid
        left_arr = [None] * left_len
        right_arr = [None] * right_len 

        for i in range(left_len):
            left_arr[i] = nums[left + i]
        
        for i in range(right_len):
            right_arr[i] = nums[mid + i + 1]
        
        i = 0
        j = 0
        k = left
        
        while i < left_len and j < right_len:
            if left_arr[i] <= right_arr[j]:
                nums[k] = left_arr[i]
                i += 1
            else:
                nums[k] = right_arr[j]
                j += 1
            k += 1
        
        while i < left_len:
            nums[k] = left_arr[i]
            i += 1
            k += 1

        while j < right_len:
            nums[k] = right_arr[j]
            j += 1
            k += 1

    def mergeSort(self, nums, left, right):
        if left >= right:
            return
        mid = math.floor(left + ((right - left)/2))
        self.mergeSort(nums, left, mid)
        self.mergeSort(nums, mid+1, right)
        self.merge(nums, left, mid, right)

    def sortArray(self, nums: List[int]) -> List[int]:
        self.mergeSort(nums, 0, len(nums) - 1)
        return nums