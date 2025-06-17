const longestConsecutive = (nums: number[]) => {
    if (nums.length === 0) return 0;

    const numsSet = new Set(nums);
    let maxLen = 1;

    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let currentNum = num;
            let currentLen = 1;

            while (numsSet.has(currentNum + 1)) {
                currentNum++;
                currentLen++;
            }

            maxLen = Math.max(maxLen, currentLen);
        }
    }
};

console.log(longestConsecutive([2,20,4,10,3,4,5])); // 4