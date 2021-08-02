function practice_2_1() {
    array1 = [1, 2, 30, 400];
    array2 = array1.filter( element => element > 10 );
    return array2;
}

function practice_2_2() {
    array1 = [1, 2, 3, 4];
    array2 = array1.filter( element => element % 2 );
    return array2;
}

function practice_2_3() {
    array1 = [1, "1", 2, {}];
    array2 = array1.filter( element => typeof(element) == 'number' );
    return array2;
}

function practice_2_4() {
    array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
    array2 = array1.filter( element => element.length > 6 );
    return array2;
}

function practice_2_5() {
    array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
    ];
    array2 = array1.filter( item => item.age < 18 );
    return array2;
}

function practice_2_6() {
    array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
    ];
    array2 = array1.filter( item => item.age !== 32 );
    return array2;
}

function practice_2_7() {
    array1 = [1, -3, 2, 8, -4, 5];
    array2 = array1.filter( element => element > 0 );
    return array2;
}

function practice_2_8() {
    array1 = [1, 3, 4, 5, 6, 7, 8];
    array2 = array1.filter( element => element % 3 == 0 );
    return array2;
}

function practice_2_9() {
    array1 = ["peach", 1, -3, "2", {}, []];
    array2 = array1.filter( element => typeof(element) == 'string' );
    return array2;
}

function practice_2_10() {
    array1 = ["APPLE", "appLE", "PEACH", "PEach"];
    array2 = array1.filter( element => element == element.toUpperCase() );
    return array2;
}

function practice_2_11() {
    array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
    ];
    array2 = array1.filter( item => +item.birth.slice(5,7) == 10 );
    return array2;
}

function practice_2_12() {
    array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
    ];
    array2 = array1.filter( item => +item.birth.slice(0,4) < 2000 );
    return array2;
}