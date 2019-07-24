let arr = [1,2,3,4,5];

const reverseBubbleSort = arr => {
    let size = arr.length;
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size-1-i; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(reverseBubbleSort(arr));