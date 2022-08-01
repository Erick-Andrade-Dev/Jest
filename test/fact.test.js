const factorial = require('../src//factorial.js')

describe('Verifica funcionamento da função factorial()', () => {
    it('Verfirica se o fatorial de 5 = 120', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('Verifica se o fatorial de 0 = 1', () => {
        expect(factorial(0)).toEqual(1);
    })

    it('Verifica se o valor inserido não é númerico', () => {
        expect(factorial(8)).toEqual(40320)
    })
})