class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        result = 0
        
        for i in range(32):
            count = 0
            for num in candidates:
                if num >> i & 1:
                    count += 1  
            result = max(result, count)
        return result 