const compose = (...funcs) => {
    return (...args) => {
        return funcs.reduceRight((acc, func) => {
            if (Array.isArray(acc)) {
                return func(...acc);
            } else {
                return func(acc);
            }
        }, args);
    }
}

const square = x => x * x;
const times2 = x => x * 2;
const times3 = x => x * 3;
const summ = (a, b) => a + b;

console.log(compose(square, times2, times3)(5));
console.log(compose(square, times2, times3, summ)(5, 10));