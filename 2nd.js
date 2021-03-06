var findMaxCons = function(nums) {
    let largest = 0;
    let current = 0;
    for (let i = 0; i<nums.length; i++) {
        nums[i] === 0 ? current = 0 : current++;
        if (current > largest) largest = current;
    };
    return largest;
};

const result = findMaxCons([1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1])
console.log(result);