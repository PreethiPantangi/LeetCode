/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target = target.sort((a,b) => a - b);
    arr = arr.sort((a,b) => a - b);
    return target.join(',') === arr.join(',');
};