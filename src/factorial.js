const factorial = (a) => {
    let fact = 1
    for (i = a; i > 1; i -=1){
        fact *= i
    }  
    return fact
}

module.exports = factorial