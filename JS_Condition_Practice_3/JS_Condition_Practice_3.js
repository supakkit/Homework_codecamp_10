let score = prompt("Input your score : ");
let grade;
if(score >= 80) {
    grade = 'A';
}
else if(score < 80 && score >= 70) {
    grade = 'B';
}
else if(score < 70 && score >= 60) {
    grade = 'C';
}
else if(score < 60 && score >= 50) {
    grade = 'D';
}
else {
    grade = 'F';
}
alert(`Your grade is ${grade}`)