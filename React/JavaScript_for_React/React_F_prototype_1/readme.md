### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - F.prototype #1

        1) จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา

            function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

            let rabbit = new Rabbit();

            alert( rabbit.eats ); // true
            

        1.1) ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา

            function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

            let rabbit = new Rabbit();

            Rabbit.prototype = {};

            alert( rabbit.eats ); // ?

        1.2) ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

            function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

            let rabbit = new Rabbit();

            Rabbit.prototype.eats = false;

            alert( rabbit.eats ); // ?

        1.3) ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

            function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

            let rabbit = new Rabbit();

            delete rabbit.eats;

            alert( rabbit.eats ); // ?

        1.4) ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร

            function Rabbit() {}
            Rabbit.prototype = {
                eats: true
            };

            let rabbit = new Rabbit();

            delete Rabbit.prototype.eats;

            alert( rabbit.eats ); // ?