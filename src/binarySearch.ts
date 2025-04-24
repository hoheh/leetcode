const binarySearch = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } 
        
        if (target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

console.log(binarySearch(arr, target)); // Output: 4