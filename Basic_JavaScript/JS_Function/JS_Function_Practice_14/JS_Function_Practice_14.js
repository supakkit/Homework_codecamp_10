function draw(n) {
    for(let row=1; row<n+1; row++) {
        let star = '';
        for(let col=n; col>0; col--) {
            (row > col)? star += '-' : star += '*';
        }
        console.log(star);
    }
}