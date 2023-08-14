/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let data = this;
    let res = {}
    if(data.length >= 0) {
        for(let i = 0; i < data.length; i++) {
            let key = fn(data[i]);
            if(res[key]) {
                res[key].push(data[i])
            } else {
                res[key] = [data[i]]
            }
        }
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */