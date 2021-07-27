### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. Advanced JavaScript - Methods of Object Practice #12

    4.1) ให้ Object ชื่อ ladder มี method ขึ้น และ ลง

        let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() { // shows the current step
            alert( this.step );
        }
        };

    4.2) Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

        ladder.up();
        ladder.up();
        ladder.down();
        ladder.showStep(); // 1

    4.3) ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้

        ladder.up().up().down().showStep(); // 1