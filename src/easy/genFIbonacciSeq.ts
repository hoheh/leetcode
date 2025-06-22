/*
* TASK: https://leetcode.com/problems/generate-fibonacci-sequence/description/
*/

function* fibGenerator(): Generator<number, any, number> {
    let current: number = 0;
    let next: number = 1;

    while(true) {
        yield current;
        [current, next] = [current, current + next];
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3