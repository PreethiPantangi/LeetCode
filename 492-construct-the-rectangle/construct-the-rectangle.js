/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let min = Infinity;
    let res;
    for(let i = 1; i*i <= area; i++) {
        if(area % i === 0) {
            let length = i;
            let width = Math.floor(area / i);
            let differenceOne = length-width;
            if(differenceOne >= 0 && differenceOne < min) {
                min = differenceOne;
                res = [length, width];
            } 
            if(length !== width) {
                let differenceTwo = width-length;
                if(differenceTwo >= 0 && differenceTwo < min) {
                    min = differenceTwo;
                    res = [width, length];
                } 
            }
        }
    }
    return res;
};