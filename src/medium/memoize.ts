const memoize = (fn: Function) => {
    let map = new Map();

    return (...args: any[]) => {
        const key = JSON.stringify(args);
        
        if (map.has(key)) {
            return map.get(key);
        }
        
        const result = fn(...args);
        map.set(key, result);
        return result;
    };
}

function summiraze(a: number, b: number): number {
    return a + b;
}

const sumMemoized = memoize(sum);
console.log(sumMemoized(1, 2)); // Output: 3
