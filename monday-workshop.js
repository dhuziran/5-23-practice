const tests = {
    multiply: (a, b) =>{
        return a * b;
    },

    concatOdds: (arr1, arr2) =>{
        let arrOdd = []
        arr1.map((el) => {
            if(el % 2 !== 0 && !arrOdd.includes(el)){
                arrOdd.push(el)
            }
        })
        arr2.map((el) => {
            if(el % 2 !== 0 && !arrOdd.includes(el)){
                arrOdd.push(el)
            }
        })
        
        return arrOdd.sort((function(a, b){return a - b}))
    },

    shopCart: (str) => {
        if(str === 'guest'){
            return 'Would you like to log in or create an account'
        }
    }
}

module.exports = tests