let userName = prompt("Who are you : ");
if(userName === "Admin") {
    let userPassword = prompt("Enter your password : ");
    if(userPassword === "codecamp#8") alert("ยินดีต้อนรับ");
    else alert("Wrong password!!")
}
else if(userName){
    alert("ผมไม่รู้จักคุณ");
}
else {
    alert("ยกเลิก");
}