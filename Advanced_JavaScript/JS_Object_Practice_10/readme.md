### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. Advanced JavaScript - Methods of Object Practice #10

        2) การทำงานของ code ดังกล่าวจะได้อะไรออกมา

            function makeUser() {
            return {
                name: "John",
                ref: this
            };
            };

            let user = makeUser();

            alert( user.ref.name ); // What's the result?
