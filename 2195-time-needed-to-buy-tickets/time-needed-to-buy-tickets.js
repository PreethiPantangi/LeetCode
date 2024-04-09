/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = tickets[k];
    for (let i = 0; i < k; i++) {
        res += Math.min(tickets[k], tickets[i]);
    }
    for (let i = k + 1; i < tickets.length; i++) {
        res += Math.min(tickets[k] - 1, tickets[i]);
    }
    return res;
};