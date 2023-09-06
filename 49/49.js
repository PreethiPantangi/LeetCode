/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = getSortedOrder(strs[i]);
        if(sortedStr in res) {
            res[sortedStr].push(strs[i]);
        } else {
            res[sortedStr] = [strs[i]];
        }
    }
    return Object.values(res);
};

var getSortedOrder = function (str) {
    return str.split("").sort().join("");
}
