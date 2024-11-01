class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        largestDifference = 0
        minSoFar = float('inf')
        for i in range(len(prices)):
            if prices[i] < minSoFar:
                minSoFar = prices[i]
            else:
               largestDifference = max(largestDifference, prices[i] - minSoFar)
        return largestDifference