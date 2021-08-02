function practice_1_1() {
    array1 = [1, 2, 30, 400];
    array2 = array1.map( value => value * 2 );
    return array2;
}

function practice_1_2() {
    array1 = [1, 2, 3, 4];
    array2 = array1.map( value => value.toString() );
    return array2;
}

function practice_1_3() {
    array1 = [1, "1", 2, {}];
    array2 = array1.map( value => typeof(value) );
    return array2;
}

function practice_1_4() {
    array1 = ["apple", "banana", "orange"];
    array2 = array1.map( value => value.toUpperCase() );
    return array2;
}

function practice_1_5() {
    array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
    ];
    array2 = array1.map( item => item.name );
    return array2;
}

function practice_1_6() {
    array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
    ];
    array2 = array1.map( item => item.age );
    return array2;
}

function practice_1_7() {
    array1 = [
        { name: "apple", surname: "London" },
        { name: "banana", surname: "Bangkok" },
        { name: "watermelon", surname: "Singapore" },
    ];
    array2 = array1.map( item => item.name + ' ' + item.surname );
    return array2;
}

function practice_1_8() {
    array1 = [1, 3, 4, 5, 6, 7, 8];
    array2 = array1.map( value => (value%2)? 'odd' : 'even' );
    return array2;
}

function practice_1_9() {
    array1 = [1, -3, 2, 8, -4, 5];
    array2 = array1.map( value => Math.abs(value) );
    return array2;
}

function practice_1_10() {
    array1 = [100, 200.25, 300.84, 400.3];
    array2 = array1.map( value => value.toFixed(2) );
    return array2;
}

function practice_1_11() {
    array1 = [
        { name: "apple", birth: "2000-01-01" },
        { name: "banana", birth: "1990-10-01" },
        { name: "watermelon", birth: "1985-12-01" },
    ];
    array2 = array1.map( item => { 
                item.age = 2019 - +item.birth.slice(0,4);
                return item;
                });
    return array2;
}

function practice_1_12() {
    array1 = [
        { name: "apple", birth: "2000-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
    ];
    array2 = array1.map( item => {
                month = ["jan", "feb", "mar", "apr", "may", "jun", "jul","aug", "sep", "oct", "nov", "dec"];
                return `<tr>
                            <td>${item.name}</td>
                            <td>${ item.birth.slice(8) } ${ month[ +item.birth.slice(5,7) - 1 ] } ${ item.birth.slice(0,4) }</td>
                        </tr>`;
                });
    return array2;
}