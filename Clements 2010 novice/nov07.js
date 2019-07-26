let line = "This contest is FUN!";
let letters = "qwertyuiopasdfghjklzxcvbnm";

const conv = (arr, letter) => {
    if (!arr.toUpperCase().includes(letter) && !arr.includes(letter)) {
        return letter;
    }
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 96) {
        let position = arr.indexOf(letter.toLowerCase()) + 1;
        return arr.charAt(26 - position).toUpperCase();
    }
    let position = arr.indexOf(letter) + 1;
    return arr.charAt(26 - position);
};

let final = line.split("").map(item => {
    return conv(letters, item);
});

console.log(final.join(""));
