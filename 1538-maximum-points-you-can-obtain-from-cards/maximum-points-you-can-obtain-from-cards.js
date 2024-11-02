/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    if(k === cardPoints.length) {
        let sum = 0;
        return cardPoints.reduce((acc, curr) => acc + curr, sum);
    }
    let leftSum = 0;
    let rightSum = 0; 
    let maxPoints = 0;
    for(let i = 0; i < k; i++) {
        leftSum += cardPoints[i];
    }
    maxPoints = leftSum;
    let rightIndex = cardPoints.length - 1;
    for(let i = k-1; i >= 0; i--) {
        leftSum -= cardPoints[i];
        rightSum += cardPoints[rightIndex];
        rightIndex -= 1;
        maxPoints = Math.max(maxPoints, leftSum + rightSum);
    }
    return maxPoints;
};