/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let prizes = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal"
    };
    let tempScores = [...score];
    tempScores.sort((a,b) => b-a);
    for(let i = 0; i < tempScores.length; i++) {
        let index = score.indexOf(tempScores[i]);
        if(i >= 0 && i <= 2) {
            score[index] = prizes[i];
        } else {
            score[index] = (i + 1).toString();
        }
    }
    return score;
};