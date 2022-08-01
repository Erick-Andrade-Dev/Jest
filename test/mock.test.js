const mockFunctions = require('../src/mock.js');

describe("mock()", () => {
    describe('mockFunctions', () => {
        mockFunctions.sum = jest.fn().mockImplementation((a, b) => a + b);
        mockFunctions.sub= jest.fn().mockImplementation((a, b) => a - b);
        mockFunctions.mul= jest.fn().mockImplementation((a, b) => a * b);
        mockFunctions.division= jest.fn().mockImplementation((a, b) => a / b)
    });
    it('sum() 1 + 1 = 2', () => {
        expect(mockFunctions.sum(1, 1)).toEqual(2)
    });

    it('sub() 5 - 2 = 3', () => {
        expect(mockFunctions.sub(5, 2)).toEqual(3)
    });

    it('mul() 5 * 5 = 25', () => {
        expect(mockFunctions.mul(5, 5)).toEqual(25)
    });

    it('division()  / 5 = 5', () => {
        expect( mockFunctions.division(25, 5)).toEqual(5)
    })
});