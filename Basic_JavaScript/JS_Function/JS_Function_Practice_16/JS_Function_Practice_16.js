function draw(n) {
    for(let row=1; row<n+1; row++) {
        let num = '';
        for(let col=1; col<n+1; col++) {
            (row < col)? num += '-' : num += row;
        }
        console.log(num);
    }

    for(let row=n-1; row>0; row--) {
        let num = '';
        for(let col=1; col<n+1; col++) {
            (row < col)? num += '-' : num += row;
        }
        console.log(num);
    }
}