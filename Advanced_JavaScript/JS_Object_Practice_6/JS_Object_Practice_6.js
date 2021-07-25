/*
การเขียนข้างล่างต่อไปนี้ Error  ไหม
*/

const user = {
name: "John"
};

// does it work?
user.name = "Pete";

// ไม่ Error เพราะไม่ได้เปลี่ยนการอ้างอิงที่อยู่ของ Object
// เป็นเพียงการเปลี่ยนการอ้างอิงที่อยู่ของ Property ใน Object