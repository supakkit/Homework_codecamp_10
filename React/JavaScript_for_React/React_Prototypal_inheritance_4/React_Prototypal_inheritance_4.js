let hamster = {
    // stomach: [],     <-- remove Array variable in parent object
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],        // <-- add Array variable in child object
    __proto__: hamster
};

let lazy = {
    stomach: [],        // <-- add Array variable in child object
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Fixed
alert( lazy.stomach ); // ''