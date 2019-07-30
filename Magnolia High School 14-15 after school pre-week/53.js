let input = [8, 2, 7];

const smallestSum = arr => {
    arr.sort((a, b) => a - b);
    return arr[0] - arr[arr.length - 1];
};

console.log(smallestSum(input));
