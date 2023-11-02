
var RecentCounter = function() {
    this.recentCounter = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.recentCounter.push(t);
    let count = 0;
    let max = Math.max(t-3000, t);
    let min = Math.min(t-3000, t);
    for(let i = 0; i < this.recentCounter.length; i++) {
        if(this.recentCounter[i] >= min && this.recentCounter[i] <= max) {
            count += 1;
        }
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */