let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";
let arr = input.split(" ");

const median = n => {
    let out = [];
    for (let i = 0; i < n; i++) {
        out.push(arr[i]);
    }
    return out;
};

let out = median(6);
if (out.length % 2 == 1) {
    console.log(parseFloat(out[Math.ceil(out.length / 2) - 1]).toFixed(1));
} else {
    let lower = Number(out[out.length / 2 - 1]);
    let upper = out[out.length / 2];
    let difference = upper - lower;
    console.log(parseFloat(lower + difference / 2).toFixed(1));
}
