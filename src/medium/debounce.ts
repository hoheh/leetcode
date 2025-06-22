const debounce = (fn: Function, delay: number): Function => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: any[]) {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
};

function sum(a: number, b: number): number {
    return a + b;
}

const sumDebounced = debounce(sum, 500);
console.log(sumDebounced(1, 2)); // Output: 3