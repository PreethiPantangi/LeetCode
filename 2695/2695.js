/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.data = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    this.sum = 0;
    for(let i = 0; i < this.data.length; i++) {
        this.sum += this.data[i];
    }
    return this.sum;
}

ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.data);
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */