const pigIt = (str: string): string =>  {
    // \b - граница слова
    // (\w) - первая буква слова (сохраняем в группу $1)
    // (\w*) - остальная часть слова (сохраняем в группу $2)
    // \b - граница слова
    // $2$1ay - меняем порядок: сначала остаток слова, затем первая буква, затем "ay"
    return str.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
