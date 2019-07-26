let arr = [
    "evil enemy y secret agent x henchman spy plan",
    "3",
    "Welcome",
    "Welcome to your new email address!",
    "RE: Meeting",
    "Evil Enemy Y wants to hold a meeting. You know where.",
    "Backup Plan",
    "Y wants a backup plan in case Secret Agent X ruins our plan again."
];

let keyWords = arr.shift().split(" ");
let totalEmails = arr.shift();

let count = 0;
let subjects = [];
arr.map(item => {
    item = item.toLowerCase();
    if (count % 2 == 1) {
        let keyWordCount = 0;
        item.split(" ").map(word => {
            for (let i = 0; i < keyWords.length; i++) {
                if (word === keyWords[i]) {
                    keyWordCount++;
                }
            }
        });
        console.log(keyWordCount);
        let thresh = item.split(" ").length * 0.25;
        if (keyWordCount >= thresh) {
            subjects.push(arr[count - 1]);
        }
    }
    count++;
});

console.log(`${subjects.length} important email(s):`);
subjects.map(item => console.log(item));
