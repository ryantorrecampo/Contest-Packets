let input = ["4X6 3", "5X7 10", "4X6 10", "5X7 2"];
let stack = [];

let id = 1;
let count = 0;
input.map(item => {
    let arr = item.split(" ");
    let [size, quantity] = arr;
    if (size == "4X6") {
        stack.push({
            id: id,
            size1: quantity
        });
        id++;
    } else {
        let element = stack.find(item => item.id == id - 1);
        element.size2 = quantity;
    }
});

stack.map(item => {
    console.log(`$${(item.size1 * 0.19 + item.size2 * 0.27).toFixed(3)}`);
});
