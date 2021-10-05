### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - bind function Lab #2

        Lab
        2) ผลลัพธ์ที่ได้คืออะไร

            function f() {
                alert(this.name);
            }
                
            f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
                
            f();