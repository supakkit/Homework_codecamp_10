function f(x) {
    alert(x);
}

// ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
function delay(f, t) {
    return function(x) {
        setTimeout(() => f.call(this,x), t);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test"); // แสดง "test" หลังจาก 1000ms
f1500("test"); // แสดง "test" หลังจาก 1500ms   