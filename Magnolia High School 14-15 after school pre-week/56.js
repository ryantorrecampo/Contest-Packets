let input = [8, 2, 7];

let arr = [];

input.map(item => arr.push(Math.pow(item, 2)));

arr.sort((a, b) => a - b);

console.log(arr[0]);
