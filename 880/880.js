/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let tape = "";
    let i = 0;
    while (tape.length <= k) {
        console.log(tape);
        if(isCharNumber(s[i])) {
            let num = parseInt(s[i]);
            tape += tape.repeat(num-1);
            console.log(tape);
        } else {
            tape += s[i];
        }
        i += 1;
    }
    return tape[k-1];
};

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}

console.log(decodeAtIndex('y959q969u3hb22odq595', 222280369));
console.log(decodeAtIndex('a2345678999999999999999', 5));
console.log(decodeAtIndex('leet2code3', 10));
console.log(decodeAtIndex('ha22', 5));