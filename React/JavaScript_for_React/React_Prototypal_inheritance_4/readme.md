### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - Prototypal inheritance #4

        4) การเขียนโค๊ดแบบนี้ กระเพาะจะถูกแชร์กันจะแก้ไขยังไงดี

            let hamster = {
                stomach: [],
                eat(food) {
                    this.stomach.push(food);
                }
            };

            let speedy = {
                __proto__: hamster
            };

            let lazy = {
                __proto__: hamster
            };

            // This one found the food
            speedy.eat("apple");
            alert( speedy.stomach ); // apple

            // This one also has it, why? fix please.
            alert( lazy.stomach ); // apple