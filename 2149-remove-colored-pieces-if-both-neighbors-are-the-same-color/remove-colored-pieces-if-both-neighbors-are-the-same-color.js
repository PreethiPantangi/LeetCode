/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let alice = bob = 0;
    for(let i = 0; i < colors.length - 2; i++) {
        if(colors[i] === colors[i+1] && colors[i+1] === colors[i+2] && colors[i+2] === colors[i]) {
            if(colors[i] === 'A') {
                alice += 1;
            } else {
                bob += 1;
            }
        }
    }
    return alice > bob ? true : false;
};