function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = [];

    for (let idx: number = 0; idx < arr.length; idx++) {
        result.push(fn(arr[idx], idx));
    }

    return result;
};