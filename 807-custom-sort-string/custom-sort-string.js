/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let mapping = {};
    let res = '';
    for(let i = 0; i< s.length; i++) {
        if(mapping[s[i]]) {
            mapping[s[i]] += 1;
        } else {
            mapping[s[i]] = 1;
        }
    };
    for(let j = 0; j < order.length; j++) {
        if(mapping[order[j]]) {
            res += order[j].repeat(mapping[order[j]]);
            delete mapping[order[j]];
        }
    };
    for(const key in mapping) {
        res += key.repeat(mapping[key]);
    }
    return res;
};