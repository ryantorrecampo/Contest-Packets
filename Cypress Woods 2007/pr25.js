let input = [
    "correct",
    20,
    "skips",
    10,
    "correct",
    38,
    "skips",
    0,
    "correct",
    40,
    "skips",
    0
];

let nums = input.filter(item => !isNaN(item));

let pairs = [];

for (let i = 0; i < nums.length; i += 2) {
    let correct = nums[i];
    if (nums[i + 1] == 0) {
        let skips = 40 - correct;
        pairs.push(correct * 6 - skips * 2);
    } else {
        pairs.push(correct * 6 - nums[i + 1] * 2);
    }
}

console.log(pairs);
