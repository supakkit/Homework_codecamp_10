### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - bind function Lab #1

        Lab
        1) this มีค่าเป็นอะไร

            function f() {
                alert( this ); // ?
            }
            let user = {
                g: f.bind(null)
            };
                user.g();
