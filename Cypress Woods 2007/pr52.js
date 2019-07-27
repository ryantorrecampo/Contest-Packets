let input = ["27 km 19.0 miles", "40 km 22.0 miles", "1 km 3.4 miles"];

const conv = num => {
    return (3.1 * num) / 5;
};

let stack = [];

input.map(item => {
    let arr = item.split(" ");
    let first = conv(arr[0]);
    let second = arr[2];
    stack.push(
        first > second
            ? parseFloat(arr[0]).toFixed(1) + " km"
            : parseFloat(second).toFixed(1) + " miles"
    );
});

stack.map(item => console.log(item));
