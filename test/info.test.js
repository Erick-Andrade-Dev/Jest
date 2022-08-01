const info = require ('../src//info.js')

describe('Verifica as informações da const info', () => {
    it('Verifica name', () => {
        expect(info.name).toEqual({first: 'Erick', last:'Andrade'})
    })

    it('Verifica idade', () => {
        expect(info.age).toEqual(21)
    })

    it('Verifica profissão', () => {
        expect(info.profession).toEqual('developer')
    })
    
    it('Verifica ano do nascimento', () => {
        expect(info.birth.age).toEqual(2001)
    })
})