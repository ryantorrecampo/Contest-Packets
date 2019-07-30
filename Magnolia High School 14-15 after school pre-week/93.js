let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";

const lastN = n => {
    let arr = input.split(" ");
    let res = [];
    for (let i = arr.length - 1; i > arr.length - 1 - n; i--) {
        res.unshift(arr[i]);
    }
    return res;
};

console.log(lastN(10));
