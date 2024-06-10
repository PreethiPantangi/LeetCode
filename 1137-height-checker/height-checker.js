/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights]
    expected.sort((a,b) => a-b);
    let count = 0;
    console.log(heights, expected)
    for(let i = 0; i < expected.length; ++i) {
        if(heights[i] !== expected[i]) {
            count += 1;
        }
    }
    return count;
};