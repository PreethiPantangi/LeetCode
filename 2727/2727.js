/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return obj.length > 0 ? false : (Object.keys(obj).length > 0 ? false : true); 
};