/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let startIndex = 0; 
    let targetIndex = 0; 
    while(startIndex < start.length && targetIndex < target.length) {
        while(startIndex < start.length && start[startIndex] === '_') {
            startIndex += 1;
        }
        while(targetIndex < target.length && target[targetIndex] === '_') {
            targetIndex += 1;
        }
        if(startIndex === start.length || targetIndex === target.length) {
            return startIndex === targetIndex;
        }
        if (start[startIndex] !== target[targetIndex]) {
            return false;
        }
        if (start[startIndex] === 'L' && startIndex < targetIndex) {
            return false;
        }
        if (start[startIndex] === 'R' && startIndex > targetIndex) {
            return false; 
        }
        startIndex += 1;
        targetIndex += 1;
    }
    while (startIndex < start.length && start[startIndex] === '_') {
        startIndex++;
    }
    while (targetIndex < target.length && target[targetIndex] === '_') {
        targetIndex++;
    }
    return startIndex === targetIndex;
};