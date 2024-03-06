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
            if(length-width >= 0 && length-width < min) {
                min = length-width;
                res = [length, width];
            } 
            if(length !== width) {
                if(width-length >= 0 && width-length < min) {
                    min = width-length;
                    res = [width, length];
                } 
            }
        }
    }
    return res;
};