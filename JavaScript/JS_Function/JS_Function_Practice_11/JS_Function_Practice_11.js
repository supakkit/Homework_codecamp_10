function draw(n) {
    for(let row=0; row<n; row++) {
        let star = '';
        for(let col=0; col<n; col++) {
            (row == col)? star += '-' : star += '*';
        }
        console.log(star);
    }
}