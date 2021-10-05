### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - call and apply Lab #1

        Lab
        1) ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, agrument2”

            function work(a, b) {
                console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
            }
            work = spy(work);
            work(1, 2); // 3
            work(4, 5); // 9
            for (let args of work.calls) {
                alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
            }

