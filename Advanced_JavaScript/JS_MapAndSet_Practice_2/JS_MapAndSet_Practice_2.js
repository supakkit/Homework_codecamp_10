function aclean(arr) {
    const anagram = [];
    const anagramMatch = new Set();
    for(i = 0; i < arr.length - 2; i++) {

        if(anagramMatch.has(i)) continue;

        let anagramCompare1 = arr[i].split('').sort();
        for(let j = i + 1; j < arr.length - 1; j++) {
            let anagramCompare2 = arr[j].split('').sort();
            // console.log(anagramCompare1)
            // console.log(anagramCompare2)
            
            if (anagramCompare1.length !== anagramCompare2.length) continue;

            let isAnagram = true;
            for(let index = 0; index < anagramCompare1.length - 1; index++) {
                if(anagramCompare1[index].toLowerCase() !== anagramCompare2[index].toLowerCase()) {
                    isAnagram = false;
                    break;
                }
            }
            // console.log(isAnagram);
    
            if(isAnagram === true) {
                anagram.push(arr[i]);
                anagramMatch.add(j);
            }
        }
    }
    return anagram;
}



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"