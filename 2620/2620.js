/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    callCount = 0;
    return function() {
        if(callCount === 0) {
            callCount += 1;
            return n;
        } else {
            n = counter(n);
            return n;
        }
    };
};

var counter = function (n) {
    return n+1;
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */