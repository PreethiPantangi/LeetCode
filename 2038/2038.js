/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(s) {
    let aliceScore = bobScore = 0;
    for (let i = 0; i < s.length-2; i++) {
        if (s[i] === s[i+1] && s[i+1] === s[i+2] && s[i+2] === s[i]) {
            if(s[i] === 'A') {
                aliceScore += 1
            } else {
                bobScore += 1;
            }
        }
    }
    return aliceScore > bobScore ? true : false;
};
