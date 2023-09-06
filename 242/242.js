/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if(s[i] in map ) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if(t[i] in map ) {
            map[t[i]] -= 1;
        } else {
            map[t[i]] = 1;
        }
        if (map[t[i]] === 0) {
            delete map[t[i]];
        }
        if (map[t[i]] < 0) {
            return false;
        }
    }
    return Object.keys(map).length > 0 ? false : true;
};
