function mul(a, b) {
    try{
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Insira um valor númerico!')
        } 
        return a * b
    }catch(error){
        return error.message
    }     
}


module.exports = mul