function mul(a, b) {
    try{
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Insira um valor númerico!')
        } 
        if( a === 0 && b === 0)  {
            throw Error('Insira um número maior que 0')
        }  
        return a * b
    }catch(error){
        return error.message
    }    
}

console.log(mul(0,0))

module.exports = mul