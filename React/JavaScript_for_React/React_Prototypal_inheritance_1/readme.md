### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - Prototypal inheritance #1

        1) ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร

            let animal = {
                jumps: null
            };

            let rabbit = {
                __proto__: animal,
                jumps: true
            };


            alert( rabbit.jumps ); // ? (1)

            delete rabbit.jumps;

            alert( rabbit.jumps ); // ? (2)

            delete animal.jumps;

            alert( rabbit.jumps ); // ? (3)
