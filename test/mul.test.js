const mul = require('../src/mul')

describe('mul()', () => {
    
    it('Verifica se a multiplicação de 2 * 10 = 20', () => {
        expect(mul(2,10)).toEqual(20)
    });

    it('Verifica se o valor inserido não é númerico', () => {
        expect(mul('2',2)).toEqual('Insira um valor númerico!')
    });

    it('Verifica se o número é maior que 0', () => {
        expect(mul(0,0)).toEqual('Insira um número maior que 0')
    })
   
})