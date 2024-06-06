/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let low = Infinity;
    let high = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < low) {
            low = prices[i];
        } else if(prices[i] - low > profit) {
            profit = prices[i] - low;
        }
    }
    return profit;
};