### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - bind function Lab #3

        Lab
        3) ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind

            function sayHi() {
                alert( this.name );
            }
            sayHi.test = 5;
            
            let bound = sayHi.bind({
                name: "John"
            });
            
            alert( bound.test ); // ผลลัพธ์คืออะไร แล้ว ทำไมจึงได้อย่างนั้น