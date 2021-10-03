Function.prototype.defer = function(t) {
    setTimeout(this, t);
}

function f() {
    alert('Hello!');
}

f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที