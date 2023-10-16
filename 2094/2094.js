/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let areAllDigitsOdd = digits.every((digit) => digit % 2 !== 0);
    if(areAllDigitsOdd) {
        return [];
    } else {
        let res = [];
        for (let i = 0; i < digits.length; i++) {
            if(digits[i] % 2 == 0) {
                for (let j = 0; j < digits.length; j++) {
                    if(j !== i) {
                        let k = j + 1;
                        while (k < digits.length) {
                            if (k !== i) {
                                // console.log(digits[j], digits[k]);
                                let num1 = parseInt(digits[j].toString() + digits[k].toString() + digits[i].toString());
                                let num2 = parseInt(digits[k].toString() + digits[j].toString() + digits[i].toString());
                                num1 >= 100 && !res.includes(num1) && res.push(num1);
                                num2 >= 100 && !res.includes(num2) && res.push(num2);
                            }
                            k += 1;
                        }
                    }
                }
            }
        }
        return res.sort();
    }
};

console.log(findEvenNumbers([2,1,3,0]));
console.log(findEvenNumbers([2,2,8,8,2]));
console.log(findEvenNumbers([3,7,5]));