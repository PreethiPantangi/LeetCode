Array.prototype.last = function() {
    let data = this;
    let len = data.length;
    return len === 0 ? -1 : data[len-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */