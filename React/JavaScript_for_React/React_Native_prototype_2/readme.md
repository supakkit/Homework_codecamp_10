### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. React - Native prototype #2

        แบบฝึกหัด (Optional)
        2) ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms

            function f(a, b) {
                alert( a + b );
            }

            f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที