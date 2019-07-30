let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";

const mean = n => {
    let arr = input.split(" ");
    let out = [];
    for (let i = 0; i < n; i++) {
        out.push(arr[i]);
    }
    return out;
};

console.log(mean(5).reduce((a, b) => a + b * 1, 0) / mean(5).length);
