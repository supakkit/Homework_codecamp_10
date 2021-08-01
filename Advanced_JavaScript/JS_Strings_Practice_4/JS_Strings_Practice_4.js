function extractCurrencyValue(str, rate) {
    return ( isNaN( parseInt(str) ) )?
        parseInt(str.slice(1)) * rate :
        parseInt(str) * rate;
}

alert( extractCurrencyValue('$120', 30.5) === 3660 );