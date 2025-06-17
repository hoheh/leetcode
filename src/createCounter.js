const createCounter = (n) => {
    const count = n;

    return () => {
        return count++;
    };
};

const counter = createCounter(10);
counter();
counter();
counter();
counter();
