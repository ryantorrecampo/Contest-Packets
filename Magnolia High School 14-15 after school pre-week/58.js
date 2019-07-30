let input = [8, 2, 7];

let oddCount = 0;
let evenCount = 0;

input.map(item => {
    if (item % 2 == 1) {
        oddCount++;
    }
});

input.map(item => {
    if (item % 2 == 0) {
        evenCount++;
    }
});

console.log(`${oddCount} ${evenCount}`);
