function draw(n) {
    for(let row=1; row<n+1; row++) {
        let star = '';
        for(let col=1; col<n+1; col++) {
            (row < col)? star += '-' : star += '*';
        }
        console.log(star);
    }

    for(let row=n-1; row>0; row--) {
        let star = '';
        for(let col=1; col<n+1; col++) {
            (row < col)? star += '-' : star += '*';
        }
        console.log(star);
    }
}