let arr = ['APPLE', 'CRAYONS', 'BARTHOLOMEWANGELO', 'X'];

let hourglass = word => {
    let wordArr = word.split('');
    let size = Math.ceil(word.length/2)-1;
    let arr = [word];
    for(let i = 0; i < size; i++) {
        wordArr[i] = ' ';
        wordArr[wordArr.length-1-i] = ' ';
        arr.push(wordArr.join(''));
    }
    for (let i = arr.length-2; i >= 0; i--) {
        let x = arr[i].split('').reverse().join('');
        arr.push(x);
    }
    return arr;
}
arr.map(item=> {
    hourglass(item).map(item => console.log(item));
    console.log('--------------');
})