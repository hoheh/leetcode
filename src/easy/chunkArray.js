const chunk = (arr, size) => {
    let result = [];
    
    for (let idx = 0; idx < arr.length; idx += size) {
        result.push(arr.slice(idx, idx + size));
    }

    return result;
};


console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 2, 3, 4, 5], 2));
