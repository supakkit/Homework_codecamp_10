let fruits = {};
let fruitName = prompt("Enter fruit name : ");

while(fruitName && fruitName !== 'stop'){
    let amount = prompt(`Enter amount of '${fruitName}' : `);
    fruits[fruitName + ((amount > 1)? 's': '')] = amount;
    fruitName = prompt("Enter fruit name : "); 
}

console.log(fruits);