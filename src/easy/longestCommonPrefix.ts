const longestCommonPrefix = (strs: string[]): string => {
    if (!strs || strs.length === 0) {
        return '';
    };

    // Делаем первый элемент массива строк образцом
    const reference: string = strs[0];

    for (let charIndex: number = 0; charIndex < reference.length; charIndex++) {
        const char: string = reference[charIndex];

        for (let strIndex: number = 1; strIndex < strs.length; strIndex++) {
            const currentStr: string = strs[strIndex];

            // В тот момент когда символы не совпадают вырезаем часть до текущего индекса
            if (currentStr[charIndex] !== char) {
                return reference.slice(0, charIndex);
            }
        }
    }

    return reference;
}

console.log(longestCommonPrefix(["dog", "dogcar", "dog"]));      // "dog"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));      // ""
console.log(longestCommonPrefix(["flower", "flow", "flight"]));   // "fl"