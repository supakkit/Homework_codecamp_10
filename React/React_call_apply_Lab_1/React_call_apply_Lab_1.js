function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
}

function spy(func) {
    f.calls = [];
    function f(...args) {
        f.calls.push(args);
        return func.apply(this, args);
    }
    return f;
}

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}