/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let len = deck.length;
    let indexInDeck = indexInResult = 0;
    let result = new Array(len).fill(0);
    let skip = false;
    deck.sort((a, b) => a - b);
    while(indexInDeck < len) {
        if(result[indexInResult] === 0) {
            if(!skip) {
                result[indexInResult] = deck[indexInDeck];
                indexInDeck += 1;
            }
            skip = !skip;
        }
        indexInResult = (indexInResult + 1) % len;
    }
    return result;
};