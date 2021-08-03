function sumSalaries(salaries) {
    if (Object.keys(salaries).length == 0) return 0;
    return Object.values(salaries).reduce( (previousValue, currentValue) => previousValue + currentValue );
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650