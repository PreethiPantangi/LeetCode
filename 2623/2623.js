/**
 * @param {Function} fn
 */
function memoize(fn) {
    let result = {}
    return function(...args) {
        const key = JSON.stringify(args);
        if(key in result) {
            return result[key]
        } else {
            result[key] = fn(...args);
            return result[key];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */