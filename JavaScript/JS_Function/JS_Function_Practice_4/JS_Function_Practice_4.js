function draw(n) {
    for(let row=0; row<n; row++) {
        let num = '';
        for(let col=0; col<n; col++){
            num += row+1;
        }
        console.log(num);
    }
}