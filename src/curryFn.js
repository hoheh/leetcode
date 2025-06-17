const dynamicCurry = (fn) => {
    const arr = [];

    return function curried(args) {
        if (args === undefined) return fn(...arr)
        
        arr.push(args);
        return curried;
    }
};

function curry(fn) {
    return function curried(...args) {
        // Если аргументов достаточно, вызываем исходную функцию
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            // Иначе возвращаем новую функцию для приёма оставшихся аргументов
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}
  

const sum = dynamicCurry((...numbers) => numbers.reduce((acc, val) => acc + val, 0));
console.log(sum(1)(2)(3)()); // 6