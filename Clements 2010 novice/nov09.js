let passwords = ["computers", "..B*121..", "so+ur16Z.("];

const isSecure = word => {
    //Must be 8-20 char long
    if (word.length < 8 || word.length > 20) return false;
    //Must contain both lowercase and uppercase letters
    let both = new Set();
    word.split("").map(item => {
        if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
            both.add("caps");
        }
        if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
            both.add("nocaps");
        }
    });
    if (!(both.has("nocaps") && both.has("caps"))) return false;
    //Must contain numbers
    let num = false;
    word.split("").map(item => {
        if (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) {
            num = true;
        }
    });
    if (num == false) return false;
    //must contain a symbol
    let symbol = false;
    word.split("").map(item => {
        if (!item.match(/[a-z]/i) && !item.match(/[0-9]/)) {
            symbol = true;
        }
    });
    if (symbol == false) return false;
    return true;
};

passwords.map(item => {
    console.log(isSecure(item) ? "Secure!" : "INSECURE!");
});
