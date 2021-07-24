function draw(n) {
    let i = 1;
    for(let row=1; row<n+1; row++) {
        let num = '';
        for(let col=n; col>0; col--) {
            (row < col)? num += '-' : num += i++;
        }
        console.log(num);
    }

    for(let row=n-1; row>0; row--) {
        let num = '';
        for(let col=n; col>0; col--) {
            (row < col)? num += '-' : num += i++;
        }
        console.log(num);
    }
}