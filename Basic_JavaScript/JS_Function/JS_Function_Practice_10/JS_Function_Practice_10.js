function draw(n) {
    for(let row=1; row<n+1; row++) {
        let num = '';
        for(let col=1; col<n+1; col++)
            num += row*col;
        console.log(num);
    }
}