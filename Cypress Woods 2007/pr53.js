let input = [
    "it",
    "dog",
    "chicken",
    "nnnnnnnnnnnnnnnnnnnnnn",
    "abcdefghijklmnopqrstuvwxyz"
];

input.map(item => {
    let toPrint = 1;
    let prev = 0;
    let word = "";
    while (word != item.substr(prev)) {
        let word = item.substr(prev, toPrint);
        console.log(word);
        prev += toPrint;
        toPrint++;
    }
    console.log("");
});
