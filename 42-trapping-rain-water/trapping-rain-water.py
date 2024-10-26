class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        total = 0
        i = 0
        j = n - 1
        left_max = height[i]
        right_max = height[j]
        
        while i < j:
            if left_max <= right_max:
                total += left_max - height[i]
                i += 1
                left_max = max(left_max, height[i])
            else:
                total += right_max - height[j]
                j -= 1
                right_max = max(right_max, height[j])
        
        return total 