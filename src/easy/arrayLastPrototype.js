Array.prototype.last = function() {
    if (!this.length) return -1;
    return this[this.length - 1];
};

console.log([1, 2, 3, 4, 5].last());