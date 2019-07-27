let input = ["5 7 9.1 2.3 6 5", "A b 2.1 3 4 3"];

input.map(item => {
    let arr = item.split(" ");
    let count = 0;
    arr.map(ch => {
        if (!isNaN(ch)) {
            let compare = Math.round(ch);
            if (ch == compare) {
                count++;
            }
        }
    });
    console.log(`int count - ${count}`);
});
