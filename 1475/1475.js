/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let res = [];
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        for (let j = i+1; j < prices.length; j++) {
            if(prices[j] <= price) {
                price -= prices[j];
                break;
            }
        }
        res.push(price);
    }
    return res;
};
