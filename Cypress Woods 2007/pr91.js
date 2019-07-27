let input = ["IT", "ASTROWORLD", "GOOD", "A"];

const fn = word => {
    let middle = word.substr(1, word.length - 2);
    for (let i = 0; i < middle.length; i++) {
        let string = "";
        for (let j = 0; j < word.length; j++) {
            if (j == 0) {
                string += middle[i];
            } else if (j == word.length - 1) {
                string += middle[i];
            } else {
                string += " ";
            }
        }
        console.log(string);
    }
};

input.map(item => {
    if (item.length == 1) {
        console.log(item);
        return;
    }
    console.log(item);
    fn(item);
    console.log(
        item
            .split("")
            .reverse()
            .join("")
    );
    fn(item);
    console.log(item);
    console.log("");
});
