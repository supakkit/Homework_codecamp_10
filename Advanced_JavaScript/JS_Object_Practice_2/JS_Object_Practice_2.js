let user = {};
let key = prompt("Enter key of user Object : ");

while(key && key !== 'stop') {
    user[key] = prompt(`Enter value of '${key}' key : `);
    key = prompt("Enter key of user Object : ");
}

console.log(user);