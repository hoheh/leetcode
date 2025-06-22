/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s: string): number => {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total: number = 0;

    for (let i = 0; i < s.length; i++) {
        const currentRoman = romanMap[s[i]];
        const nextRoman = romanMap[s[i + 1]];

        if (nextRoman && currentRoman < nextRoman) {
            total -= currentRoman;
        } else {
            total += currentRoman;
        }
    }

    return total;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58 = 50 + 5 + 1 + 1 + 1
console.log(romanToInt("MCMXCIV")); // 1994 = 1000 + 1000 - 100 + 100 - 10 + 5 - 1
