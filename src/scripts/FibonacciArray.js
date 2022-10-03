//Buscando sem usar recursividade:
/*
function buscaFibinacci(numero){
  let totalFib = 0, ant = 1, fut = 0;
  
  while(totalFib < numero){
    let aux = ant + fut;
    
    ant = fut;
    fut = aux;
    
    totalFib++;
  }
  
  return fut;
}
*/

function buscaFibinacci(numero){
  return (numero < 2 ? numero : buscaFibinacci(numero - 1) + buscaFibinacci(numero - 2));
}

function fibonacciArray(texto){
    let entrada = texto.split('\n');
    let result = ``;
    for(let i = 1; i <= parseInt(entrada[0]); i++){
        result += `Fib(${entrada[i]}) = ${buscaFibinacci(entrada[i])}\n`
    }
    return result;
}

module.exports = fibonacciArray;
