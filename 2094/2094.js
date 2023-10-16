/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let areAllDigitsOdd = digits.every((digit) => digit % 2 !== 0);
    if(areAllDigitsOdd) {
        return [];
    } else {
        let res = new Set();
        for (let i = 0; i < digits.length; i++) {
            if(digits[i] % 2 == 0) {
                for (let j = 0; j < digits.length; j++) {
                    if(j !== i) {
                        for (let k = j + 1; k < digits.length; k++) {
                            if (k !== i) {
                                let num1 = digits[j] * 100 + digits[k] * 10 + digits[i];
                                let num2 = digits[k] * 100 + digits[j] * 10 + digits[i];
                                num1 >= 100 && res.add(num1);
                                num2 >= 100 && res.add(num2);
                            }
                        }
                    }
                }
            }
        }
        return Array.from(res).sort();
    }   
};

console.log(findEvenNumbers([2,1,3,0]));
console.log(findEvenNumbers([2,2,8,8,2]));
console.log(findEvenNumbers([3,7,5]));