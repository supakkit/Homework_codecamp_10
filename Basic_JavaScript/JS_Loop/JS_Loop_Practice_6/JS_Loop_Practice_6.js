let guess = +prompt("Input Number between 1 - 100 : ");
while(true){
    let answer = +prompt("Enter your guess number : ");
    if(answer === guess) {
        alert("You win!");
        break;
    }
    else if(answer > guess) {
        alert("Your guess is too high.");
    }
    else if(answer < guess) {
        alert("Your guess is too low.");
    }
    else {
        alert("Invalid, try input the number again.");
    }
}