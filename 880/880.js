function decodeAtIndex(s, k) {
    let length = 0;
    let i = 0;

    while (i < s.length && length < k) {
        if (isNaN(parseInt(s[i]))) {
            length++;
            i++;
        } else {
            let count = parseInt(s[i]);
            length *= count;
            i++;
        }
    }

    i--;

    while (i >= 0) {
        if (!isNaN(parseInt(s[i]))) {
            length /= parseInt(s[i]);
            k %= length;
        } else if (k % length === 0) {
            return s[i];
        } else {
            length--;
        }
        i--;
    }
    return s[0];
}


console.log(decodeAtIndex('leet2code3', 10));
console.log(decodeAtIndex('ha22', 5));
console.log(decodeAtIndex('a2345678999999999999999', 1));