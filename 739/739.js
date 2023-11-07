/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    let res = [];
    for(let i = 0; i < len; i++) {
        let temp = temperatures[i];
        let count = 0;
        let isGreatFound = false;
        for(let j = i+1 ; j < len; j++) {
            if(temperatures[j] > temp) {
                count += 1;
                isGreatFound = true;
                break;
            } else {
                count += 1;
            }
        }
        if(!isGreatFound) {
            res.push(0)
        } else {
            res.push(count)
        }
    }
    return res;
};