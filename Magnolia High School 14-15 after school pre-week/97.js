let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";
let arr = input.split(" ");

const nth = n => {
    let out = [];
    for (let i = 0; i < n; i++) {
        out.push(Number(arr[i]));
    }
    return out;
};

let total = 0;
nth(5).map(item => {
    total += Math.pow(item, 2);
});
console.log(total);
