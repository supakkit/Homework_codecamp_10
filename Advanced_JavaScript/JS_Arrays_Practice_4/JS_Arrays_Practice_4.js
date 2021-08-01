function getMaxSubSum(arr) {
    let subsum = [];
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            subsum.push(sum);
        }
    }
    return Math.max(...subsum);
}

console.log( getMaxSubSum( [-1, 2, 3, -9] ) == 5 )
console.log( getMaxSubSum( [2, -1, 2, 3, -9] ) == 6 )
console.log( getMaxSubSum( [-1, 2, 3, -9, 11] ) == 11 )
console.log( getMaxSubSum( [-2, -1, 1, 2] ) == 3 )
console.log( getMaxSubSum( [100, -9, 2, -3, 5] ) == 100 )
console.log( getMaxSubSum( [1, 2, 3] ) == 6 ) //(take all)
