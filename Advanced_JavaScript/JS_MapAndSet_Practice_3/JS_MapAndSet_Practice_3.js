let map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() );    // use Array.from()

keys.push("more");

// Answer: ใช้ Array.from() เพื่อแปลง map.keys() เป็น Array
// เพราะ map.keys() ยังไม่ได้อยู่ในรูปของ Array แต่เป็น Map Iterator