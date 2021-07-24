/*
1) แปลง Code ดังกล่าวเป็น if-else statement

switch (browser) {
    case 'Edge' :
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}
*/
let browser = prompt("Input Browser : ");
if(browser == 'Edge') {
    alert("You've got the Edge!");
}
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okay we support these browers too');
}
else {
    alert('We hope that this page looks ok!');
}
