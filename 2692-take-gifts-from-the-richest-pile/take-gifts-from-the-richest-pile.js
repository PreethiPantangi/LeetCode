/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++) {
        let max_value = Math.max(...gifts);
        let max_value_index = gifts.indexOf(max_value);
        gifts[max_value_index] = Math.floor(Math.sqrt(max_value));
    }
    return gifts.reduce((acc, sum) => acc + sum, 0);
};