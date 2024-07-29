/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversedN = 0;
    for(let i = 0; i < 32; i++) {
        // Making place to accept the next bit
        reversedN = reversedN << 1;
        // Getting the least significant bit from n
        bit = n & 1;
        // Adding the bit to the reveresed N
        reversedN = reversedN | bit
        // Moving to the next bit that removes the LSB and makes the next one the LSB
        n = n >> 1;
    }
    // Ensures that the result is treated as an unsigned 32-bit integer even if reversedN is a negative 
    return reversedN >>> 0;
};