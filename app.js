let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}
    
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}
     
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / oneEuroIs["USD"] * oneEuroIs["JPY"];
    return valueInYen;
}
     
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen / oneEuroIs["JPY"] * oneEuroIs["GBP"];
    return valueInPound;
}

console.log("Hello World")

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};