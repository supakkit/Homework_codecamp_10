### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - Modern prototype #2

        2) สร้าง object rabbit ด้วย new keyword

            function Rabbit(name) {
                this.name = name;
            }
            Rabbit.prototype.sayHi = function() {
                alert(this.name);
            };

            let rabbit = new Rabbit("Rabbit");

        - คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่

            rabbit.sayHi();
            Rabbit.prototype.sayHi();
            Object.getPrototypeOf(rabbit).sayHi();
            rabbit.__proto__.sayHi();
