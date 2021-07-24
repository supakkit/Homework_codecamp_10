function draw(n) {
    for(let row=0; row<n; row++) {
        let num = '';
        for(let col=1; col<n+1; col++){
            num += col;
        }
        console.log(num);
    }
}