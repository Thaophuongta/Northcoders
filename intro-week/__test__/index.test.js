const findAndTotalDigits = require("./index")

describe("findAndTotalDigits", () => {
    test("given emplty array return 0", () => {
        // arrange
        const testInput = [];
        // act
        const actualOutput = findAndTotalDigits(testInput);
        // assert
        expect(actualOutput).toBe(0);
    })
    // if given array of strings containing just numbers, returns total of all numbers found
    // ["1"] return 1
})
