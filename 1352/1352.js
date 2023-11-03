
var ProductOfNumbers = function() {
    this.res = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.res.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let count = 0;
    let i = this.res.length - 1;
    let product = 1;
    while(count !== k) {
        product *= this.res[i];
        count++;
        i--;
    }
    return product;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */