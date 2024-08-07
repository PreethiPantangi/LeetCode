/**
 * @param {number} num
 * @return {string}
 */

const belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

var numberToWords = function(num) {
    if (num === 0) {
        return "Zero";
    }
    return convertToWords(num);
};

var convertToWords = (num) => {
    if (num < 10) {
        return belowTen[num];
    }
    if (num < 20) {
        return belowTwenty[num - 10];
    }
    if (num < 100) {
        return belowHundred[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + convertToWords(num % 10) : "");
    }
    if (num < 1000) {
        return convertToWords(Math.floor(num / 100)) + " Hundred" + (num % 100 !== 0 ? " " + convertToWords(num % 100) : "");
    }
    if (num < 1000000) {
        return convertToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 !== 0 ? " " + convertToWords(num % 1000) : "");
    }
    if (num < 1000000000) {
        return convertToWords(Math.floor(num / 1000000)) + " Million" + (num % 1000000 !== 0 ? " " + convertToWords(num % 1000000) : "");
    }
    return convertToWords(Math.floor(num / 1000000000)) + " Billion" + (num % 1000000000 !== 0 ? " " + convertToWords(num % 1000000000) : "");
}