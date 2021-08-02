function aclean(arr) {
    let anagram = [];
    for(let keyArr = 0; keyArr < arr.length - 1; keyArr++) {
        let anagramCompare1 = arr[keyArr].split('').sort();
        let anagramCompare2 = arr[keyArr + 1].split('').sort();
        
        if (anagramCompare1.length !== anagramCompare2) continue;
        
        
        
    }
}



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"