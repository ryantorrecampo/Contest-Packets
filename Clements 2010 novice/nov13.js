let line = "15 / 3 + 6 / 2";
let operators = ["/", "*", "-", "+"];
let counter = 0;
let op = "";

line.split(" ").map(item => {
    if (!operators.includes(item)) {
        if (counter == 0) {
            counter = item;
        } else {
            counter = eval(`${counter} ${op} ${item}`);
        }
    }
    if (operators.includes(item)) {
        switch (item) {
            case "*":
                op = item;
                break;
            case "/":
                op = item;
                break;
            case "-":
                op = item;
                break;
            case "+":
                op = item;
                break;
        }
    }
});

console.log(Math.round(counter));
