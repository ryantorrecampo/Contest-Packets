let line = [
    [3, 2, 2, 1, 8, 9, 9],
    [3, 2, 2, 7, 1, 9, 9],
    [5, 2, 2, 4, 4, 6, 6, 8, 8, 9, 9]
];

const dist = (a, b, c, d) => {
    return Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
};

let totals = [];
line.map(item => {
    let total = 0;
    console.log(`Path #${line.indexOf(item) + 1}`);
    for (let i = 1; i < item.length - 2; i += 2) {
        console.log(
            `Distances to calculate: (${item[i]},${item[i + 1]}), (${
                item[i + 2]
            },${item[i + 3]})`
        );
        total += dist(item[i], item[i + 1], item[i + 2], item[i + 3]);
    }
    totals.push(total);
    console.log("----------------------------");
});
let lowest = 40000;
totals.map(item => {
    item < lowest ? (lowest = item) : (lowest = lowest);
});
console.log(`Fastest Path: #${totals.indexOf(lowest) + 1}`);
