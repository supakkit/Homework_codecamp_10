function draw(n) {
    for(let row=n; row>0; row--) {
        let num = '';
        for(let col=0; col<n; col++){
            num += row;
        }
        console.log(num);
    }
}