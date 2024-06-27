/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let map = {};
    for(let i = 0; i < edges.length; i++) {
        if(map[edges[i][0]]) {
            map[edges[i][0]] += 1
        } else {
            map[edges[i][0]] = 1
        }
        if(map[edges[i][1]]) {
            map[edges[i][1]] += 1
        } else {
            map[edges[i][1]] = 1
        }
    }
    for(const key in map) {
        if(map[key] === edges.length) {
            return key;
        }
    }
};