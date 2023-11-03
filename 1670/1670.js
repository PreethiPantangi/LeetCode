
var FrontMiddleBackQueue = function() {
    this.res = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.res.unshift(val);
    console.log(this.res);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let start = 0;
    let end = this.res.length;
    let mid = parseInt(start + (end - start)/2);
    let vals = this.res;
    this.res = [...vals.splice(0, mid), val, ...vals];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.res.push(val);
    console.log(this.res);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return this.res.length === 0 ? -1 : this.res.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.res.length === 0)
        return -1;
    let start = 0;
    let end = this.res.length - 1;
    let mid = parseInt(start + (end - start)/2);
    let val = this.res[mid];    
    let vals = this.res;
    this.res = [...vals.splice(0,mid), ...vals.splice(1,vals.length)]
    return val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return this.res.length === 0 ? -1 : this.res.pop();
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */