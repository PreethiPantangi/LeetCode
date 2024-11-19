class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        dic = {}
        for i,num in enumerate(numbers):
            res = target - num
            if res in dic:
                return [dic[res]+1, i+1]
            dic[num] = i