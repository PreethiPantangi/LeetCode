/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = {}
    for(let i = 0; i < arr1.length; i++) {
        if(map[arr1[i]]) {
            map[arr1[i]] += 1;
        } else {
            map[arr1[i]] = 1;
        }
    }
    let res = [];
    for(let i = 0; i < arr2.length; i++) {
        let count = map[arr2[i]];
        res.push(...new Array(count).fill(arr2[i]));
        delete map[arr2[i]];
    }
    for(const key in map) {
        res.push(...new Array(map[key]).fill(key));
    }
    return res;
};