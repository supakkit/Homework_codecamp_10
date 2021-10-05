### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - Prototypal inheritance #3

        3) การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป

            let animal = {
                eat() {
                    this.full = true;
                }
            };

            let rabbit = {
                __proto__: animal
            };

            rabbit.eat();