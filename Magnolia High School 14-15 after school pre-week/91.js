let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";

const nth = n => {
    let arr = input.split(" ");
    for (let item in arr) {
        if (item == n) {
            return arr[item];
        }
    }
};

console.log(nth(4));
