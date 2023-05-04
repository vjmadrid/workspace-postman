
const { sum, diff, product, divide } = require('../src/calculator');

describe("Calculator Tests", () => {

    test("Addition of 2 numbers", () => {
        // arrange and act
        var result = sum(1,2)

        // assert
        expect(result).toBe(3);
    });

    test("Subtraction of 2 numbers", () => {
        // arrange and act
        var result = diff(10,2)

        // assert
        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        // arrange and act
        var result = product(2,8)

        // assert
        expect(result).toBe(16);
    });

    test("Division of 2 numbers", () => {
        // arrange and act
        var result = divide(24,8)

        // assert
        expect(result).toBe(3);
    });
})