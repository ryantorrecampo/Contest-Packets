let input = "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47";

const firstN = n => {
    let arr = input.split(" ");
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
};

firstN(5);
