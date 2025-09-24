class Solution {
    public int maxScore(int[] cardPoints, int k) { // [1,2,3,4,5,6,1], 4
        int n = cardPoints.length; // 7
        int leftSum = 0; // 0
        int l = 0; // 0
        int r = 0; // 0
        while(r < k) { // 4 < 4
            leftSum += cardPoints[r]; // 10
            r += 1; // 4
        }
        if(n == k) return leftSum; // 7 == 4; NO
        int rightSum = 0; // 0
        int max = leftSum; // 10
        l = r-1; // 
        r = n-1;
        while( (n - r) + (l + 1) != k && l >= 0 && r >= 0) {
            leftSum = leftSum - cardPoints[l];
            l -= 1;
            rightSum = rightSum + cardPoints[r];
            max = Math.max(max, leftSum+rightSum);
            r -= 1;
        }
        return max;
    }
}