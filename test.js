const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
        let total = sum(14, 9);
       expect(total).toBe(23);
});
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87, 
}

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs["USD"];

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yens", function() {

    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 / oneEuroIs["USD"] * oneEuroIs["JPY"];

    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); 
})
test("One yen should be 50.03 pounds", function() {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(9000);

    const expected = 9000 / oneEuroIs["JPY"] * oneEuroIs["GBP"];

    expect(fromYenToPound(9000)).toBe(50.031948881789134); 
})