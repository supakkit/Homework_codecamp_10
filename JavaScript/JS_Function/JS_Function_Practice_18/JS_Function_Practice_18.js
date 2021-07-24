function draw(n) {
    for(let row=n; row>0; row--) {
        let star = '';
        for(let col=n; col>0; col--) {
            (row < col)? star += '-' : star += '*';
        }
        console.log(star);
    }
}