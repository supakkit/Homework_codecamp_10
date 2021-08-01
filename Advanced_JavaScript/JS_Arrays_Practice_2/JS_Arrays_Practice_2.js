let styles = ['Jazz', 'Blues'];     // a.
styles.push('Rock-n-Roll');         // b.
styles[Math.floor(styles.length/2)] = 'Classics'; // c.
styles.shift();     // d.
styles.unshift('Rap', 'Reggae');    // e.

console.log(styles);