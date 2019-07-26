let arr = [
    [6, 3, 5, 2, 7, 1, 6],
    [4, 5, 13, 17, 1],
    [8, 64, 36, 22, 78, 50, 57, 43, 71]
];

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

arr.map(item => {
    item.shift();
    // item.sort((a, b) => a - b);
    item = bubbleSort(item);
    let difference = item[item.length - 1] - item[item.length - 2];
    for (let i = 0; i < item.length - 1; i++) {
        if (item[i + 1] - item[i] != difference) {
            console.log(item[i] + difference);
        }
    }
});
