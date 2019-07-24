let arr = [[10,10], [12, 3]];

let factorial = a => {
    let val = 1;
    while(a >= 1) {
        val*=a;
        a--;
    }
    return val;
}

let comb = (n, r) => {
    let top = factorial(n);
    let bot = factorial(r)*factorial(n-r);

    return `${top/bot*10} seconds`;
}

console.log(comb(arr[1][0], arr[1][1]));