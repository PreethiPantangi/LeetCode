/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let k = Infinity;
    let start = 1; 
    let end = Math.max(...piles);
            
    while (start <= end) {
        mid = parseInt(start + (end - start)/2);
        totalHours = 0;
        for (let i = 0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / mid);
        }
        if(totalHours <= h) {
            k = Math.min(k, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return k;
};
