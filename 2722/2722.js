/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let arr =  [...arr1, ...arr2]
    let res = {}
    for(let i = 0; i < arr.length; i++) {
        let id = arr[i].id;
        if(id in res) {
            res[id] = {...res[id], ...arr[i]}
        } else {
            res[id] = arr[i];
        }
    }
    return Object.values(res);
};