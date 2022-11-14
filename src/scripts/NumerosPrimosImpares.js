function isPrimo(n){
    for (let j = 2; j < n; j++) {
       if (n % j === 0) {return false;};
    }
    return true;
}

function numerosPrimosImpares(n){
    let totalPrimos = 0;
    let i = 0;
    let arr = []
    while(totalPrimos < n){
    
      if (isPrimo(i) && i > 1 && i % 2 === 1) {
        arr.push(i);
        totalPrimos++;
      }
    
      i++;
    }
      return arr
      
    }


module.exports = numerosPrimosImpares;