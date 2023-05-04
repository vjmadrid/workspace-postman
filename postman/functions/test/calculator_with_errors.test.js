
const { sum, diff, product, divide } = require('../src/calculator_with_errors');

describe("Calculator Tests", () => {

    test("Addition of 2 numbers", () => {
        // arrange and act
        var result = sum(1,2)

        // assert
        expect(result).toBe(3);
    });

    test('Addition: Throw Error when inputs are not numbers', async () => {
        expect(() => sum('1', 2)).toThrowError(
            Error('Inputs should be numbers')
        )
    });

    test("Subtraction of 2 numbers", () => {
        // arrange and act
        var result = diff(10,2)

        // assert
        expect(result).toBe(8);
    });

    test('Subtraction: Throw Error when inputs are not numbers', async () => {
        expect(() => diff('10', 2)).toThrowError(
            Error('Inputs should be numbers')
        )
    });

    test("Multiplication of 2 numbers", () => {
        // arrange and act
        var result = product(2,8)

        // assert
        expect(result).toBe(16);
    });

    test('Multiplication: Throw Error when inputs are not numbers', async () => {
        expect(() => product('2', 8)).toThrowError(
            Error('Inputs should be numbers')
        )
    });

    test("Division of 2 numbers", () => {
        // arrange and act
        var result = divide(24,8)

        // assert
        expect(result).toBe(3);
    });

    test('Division: Throw Error when inputs are not numbers', async () => {
        expect(() => divide('24', 8)).toThrowError(
            Error('Inputs should be numbers')
        )
    });
})