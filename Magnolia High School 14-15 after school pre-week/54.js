let input = [8, 2, 7];

let total = input.reduce((prev, curr) => prev + curr, 0);
console.log((total / input.length).toFixed(2));
