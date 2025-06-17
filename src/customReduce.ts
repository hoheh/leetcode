/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce<T, U>(nums: T[], fn: (acc: U, curr: T, index: number) => U, init: U): U {
    let accumulator = init;
    
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i], i);
    }

    return accumulator;
};

const nums = [1,2,3,4]
const fn = function sum(accum: number, curr: number) { return accum + curr; }
const init = 0

console.log(reduce(nums, fn, init));