class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        leftSum = 0
        rightSum = 0
        maxPoints = 0
        for i in range(k):
            leftSum += cardPoints[i]
        maxPoints = leftSum
        rightIndex = len(cardPoints) - 1
        for i in range(k - 1, -1, -1):
            leftSum -= cardPoints[i]
            rightSum += cardPoints[rightIndex]
            rightIndex -= 1
            maxPoints = max(maxPoints, leftSum + rightSum)
        return maxPoints