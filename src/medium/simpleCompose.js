const compose = (funcs) => {
    return function(x) {
        return funcs.reduceRight((acc, fn) => fn(acc), x);
    }
};

const comp = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(comp(4));