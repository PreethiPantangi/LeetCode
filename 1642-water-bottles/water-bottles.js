/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalDrinks = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        let newBottles = Math.floor(emptyBottles / numExchange);
        totalDrinks += newBottles;
        emptyBottles = emptyBottles % numExchange + newBottles;
    }

    return totalDrinks;
};
