String.prototype.toJadenCase = function () {
    return this.split(' ').map((word: string) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// TODO: лучший результат имхо
// String.prototype.toJadenCase = function () {
//     return this.replace(/(?<=\s|^)./g, (m) => m.toUpperCase())
// };

// Declaration needed, don't remove it
interface String {
    toJadenCase(): string;
}

console.log("I love coding".toJadenCase()); // Output: I Love Coding