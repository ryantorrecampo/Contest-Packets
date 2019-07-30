let input = [8, 2, 7];

const smallestSum = arr => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] * arr[arr.length - 2];
};

console.log(smallestSum(input));
