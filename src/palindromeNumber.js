const isPalindrome = function(x) {
    if (x < 0) return false;

    let initX = x;
    let reversed = 0;

    while (x > 0) {
        // Тут мы просто переворачиваем число с помощью деления с конца
        reversed = (reversed * 10) + (x % 10);

        // Тут убираем проверенную часть
        x = Math.floor(x / 10);
    }

    return reversed === initX;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
