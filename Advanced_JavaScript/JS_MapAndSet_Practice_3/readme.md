### CodeCamp #10
    1. นายสุพรรคกิจ สิทธิ (Supakkit Sitthi)
    2. Advanced JavaScript - Map and Set Practice #3

        3) เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้
	    เราจะทำยังไงให้ keys.push สามารถทำงานได้

            let map = new Map();

            map.set("name", "John");

            let keys = map.keys();

            // Error: keys.push is not a function
            keys.push("more");