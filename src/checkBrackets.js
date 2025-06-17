{
    function checkBrackets(str) {
        const stack = [];
        const bracketsMap = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
       
        for (let i = 0; i < str.length; i++) {
            const bracket = str[i];
            
            if (bracketsMap[bracket]) {
                stack.push(bracketsMap[bracket]);
            } else if (bracket !== stack.pop()) {
                return false;
            }
        }
    
        return !stack.length;
    }
    
    console.log(checkBrackets("()[]{}")); // true
    console.log(checkBrackets("([)]")); // false
    console.log(checkBrackets("{{[()]}}")); // true
}