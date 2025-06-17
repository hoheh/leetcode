function sumTwoSmallestNumbers(numbers: number[]): number {
    let firstMin: number = Infinity;
    let secondMin: number = Infinity;
  
    for (const num of numbers) {
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin) {
            secondMin = num;
        }

        console.log(firstMin, secondMin)
    }
  
    return firstMin + secondMin;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 5 + 2 = 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // 10 + 3453445 = 3453455
