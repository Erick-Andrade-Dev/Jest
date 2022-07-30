const mul = require('./mul')

describe('Verifica se a função mul retorna o valor1 * valor 2', () => {
    
    it('Verifica se a multiplicação de 2 * 10 = 20', () => {
        expect(mul(2,10)).toEqual(20)
    })

    it('Verfica se não é um false pass', () => {
        expect(mul(3,10)).toEqual(20)
    })
})