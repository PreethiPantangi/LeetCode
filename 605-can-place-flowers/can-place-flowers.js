/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length === 1 && n === 1 ) {
        return flowerbed[0] === 0
    } else {
        let i = 0;
        let j = 1;
        let len = flowerbed.length-1;
        while(i < len && n !== 0) {
            if(flowerbed[i] === flowerbed[j] && flowerbed[j] === 0) {
                if(i === 0 && flowerbed[i] === 0 && flowerbed[j] === 0)  {
                    flowerbed[i] = 1;
                    n -= 1;
                } else if(flowerbed[j+1] !== undefined && flowerbed[j+1] === 0) {
                    flowerbed[j] = 1;
                    n -= 1;
                } else if (j === len && flowerbed[j] === 0) {
                    flowerbed[j] = 1;
                    n -= 1;
                }
            }
            i += 1;
            j += 1;
        }
        console.log(n);
        return n === 0;
    }
};