const mockFunctions = require('../src/division')

describe('Verifica a função division() e o mock', () => {
    describe('mock', () => {
        mockFunctions.division = jest.fn().mockImplementation((a, b) => a / b)
    });
})        
    test('Verifica a divisão de 9/3 = 3', () => {
        expect(mockFunctions.division(9, 3)).toEqual(3)
    })