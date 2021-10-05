### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - bind function Lab #4

        Lab
        4) ทำให้ code ด้านล่างนี้ทำงานได้

            function askPassword(ok, fail) {
                let password = prompt("Password?", '');
                if (password == "rockstar") ok();
                else fail();
            }
            
            let user = {
                name: 'John',
                loginOk() {
                    alert(`${this.name} logged in`);
                },
                loginFail() {
                    alert(`${this.name} failed to log in`);
                },
            };
            // แก้ไข code ด้านล่างนี้
            askPassword(user.loginOk, user.loginFail);
