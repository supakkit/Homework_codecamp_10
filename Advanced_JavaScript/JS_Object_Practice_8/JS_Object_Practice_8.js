function multiplyNumeric(obj, times) {
    for(let key in obj){
        if (typeof obj[key] !== 'number') continue;
        obj[key] *= times;
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu, 2);
console.log(menu);