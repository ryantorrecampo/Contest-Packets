let line = "15 / 3 + 6 / 2";
let operators = ["/", "*", "-", "+"];
let stack = [];

line.split(" ").map(item => {
    if (operators.includes(item)) {
        let weight = 0;
        if (item == "/" || item == "*") {
            weight = 1;
        }
        if (item == "+" || item == "-") {
            weight = 0;
        }
        stack.push({
            operator: `${item}`,
            weight: `${weight}`
        });
    }
});

stack.sort((a, b) => b.weight - a.weight);
console.log(stack);
