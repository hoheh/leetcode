interface Counter {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count = init || 0;

    const increment = function() {
        count++;
        return count;
    };

    const decrement = function() {
        count--;
        return count;
    };

    const reset = function() {
        count = init || 0;
        return count;
    };

    return { increment, decrement, reset };
};