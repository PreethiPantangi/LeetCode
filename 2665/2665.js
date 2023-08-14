/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    initialVal = init;
    return {
        increment: function() {
            init += 1
            return init;
        },
        decrement: function() {
            init -= 1;
            return init;
        },
        reset: function() {
            init = initialVal;
            return initialVal;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */