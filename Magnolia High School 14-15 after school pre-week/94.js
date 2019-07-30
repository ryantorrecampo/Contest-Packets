let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";

const sumN = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += input.split(" ")[i] * 1;
    }
    return sum;
};

console.log(sumN(5));
