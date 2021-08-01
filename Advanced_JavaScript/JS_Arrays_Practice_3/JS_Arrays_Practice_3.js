function sumInput() {
    let index = 0;
    let sumResult = null;
    let numArr = [ parseFloat( prompt('Input Number to sum:') ) ];

    while ( !isNaN( numArr[index] ) ) {
        sumResult += numArr[index];
        numArr.push( parseFloat( prompt('Input Number to sum:') ) );
        index++;
    }
    
    numArr.pop();
    console.log(numArr);
    return sumResult;
}

alert(`Sum result: ${sumInput()}`);