/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let values = []
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            if(map[s[i]] !== t[i]) {
                return false;
            }
        } else {
            if(!values.includes(t[i])) {
                map[s[i]] = t[i];
                values.push(t[i]);
            } else {
                return false;
            }
        }
    }
    return true;
};