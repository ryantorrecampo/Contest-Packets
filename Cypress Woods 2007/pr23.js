let input = [
    2,
    "BIG MAC",
    "SUBWAY CLUB",
    3,
    "BIG MAC",
    "BIG MAC",
    "BIG MAC",
    3,
    "SUBWAY CLUB",
    "SUBWAY CLUB",
    "SUBWAY CLUB"
];

let stack = [];
let id = 1;
let counter = 0;
let i = 0;
while (i < input.length) {
    if (!isNaN(input[i])) {
        counter = 0;
        stack.push({
            id: id
        });
        id++;
    } else {
        if (input[i] == "BIG MAC") {
            counter += 30;
        }
        if (input[i] == "SUBWAY CLUB") {
            counter += 6;
        }
    }

    let item = stack.find(item => item.id == id - 1);
    item.val = counter;
    i++;
}

stack.map(item => {
    console.log(`${item.val}g`);
});
