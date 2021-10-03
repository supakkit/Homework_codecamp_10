Function.prototype.defer = function(t) {
    let func = this;
    return function(...args) {
        setTimeout(() => func.apply(this, args), t);
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที