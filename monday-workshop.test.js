const tests = require("./monday-workshop")
describe('Prompt Tests', () => {
    test('multiply(5, 5): multiplies 5 * 5 should return 25', () => {
        expect(tests.multiply(5, 5)).toBe(25)
    })

    test('concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]): goes through each list and return a new array of only odd numbers', () => {
        expect(tests.concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toStrictEqual([-1, 1, 3, 9, 15])
    })

    test('shopCart("guest"): should return if the user wants to log in or create an account', () => {
        expect(tests.shopCart('guest')).toBe('Would you like to log in or create an account')
    })
})