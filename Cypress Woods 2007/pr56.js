let input = [
    "3 5",
    "This is blame.",
    "Mmm I need 32 tortes today.",
    "I wish you had soup, sheeps, and yolks."
];
let first = true;
let line = "";
input.map(item => {
    if (first) {
        let arr = item.split(" ");
        [lines, skips] = arr;
        first = false;
    } else {
        let count = 0;
        item.split("").map(ch => {
            if (ch.match(/[a-z]/gi)) {
                count++;
                if (count == 5) {
                    line += ch;
                    count = 0;
                }
            }
        });
        line += " ";
    }
});

console.log(line.trim());
