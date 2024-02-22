/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highest = candies.reduce((acc, curr) => curr > acc ? curr : acc, -1);
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= highest) {
            candies[i] = true;
        } else {
            candies[i] = false;
        }
    }
    return candies;
};