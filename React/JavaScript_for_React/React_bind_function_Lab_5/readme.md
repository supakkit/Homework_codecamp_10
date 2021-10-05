### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - bind function Lab #5

        Lab
        5) ทำให้ code ด้านล่างนี้ทำงานได้

            function askPassword(ok, fail) {
                let password = prompt("Password?", '');
                if (password == "rockstar") ok();
                else fail();
            }

            let user = {
                name: 'John',
            
                login(result) {
                alert( this.name + (result ? ' logged in' : ' failed to log in') );
                }
            };
            
            askPassword(?, ?); // ?