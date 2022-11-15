function getAllSubs(palavra){
    let subs = [];
  
    for(i = 1; i < palavra.length; i++){
  
      let aux = [];
      for(j = 0; j < palavra.length; j++){   
        aux.push(palavra.substring(j, j+i)); 
      }
      subs.push(aux)
    }
  
    return subs;
  }
  
  function isAnagrama(palavraA, palavraB){
    if(palavraA.length != palavraB.length){
      return false;
    }
  
    palavraA = palavraA.split("").sort().join('');
    palavraB = palavraB.split("").sort().join('');
  
    return (palavraA == palavraB);
  }
  
  function TotalDeSubstringsAnagramas(palavra) {
    let substrings = getAllSubs(palavra);
    
    let total = 0;
    for (sub of substrings) {
      for(i = 0; i < sub.length; i++){
         for(j = i+1; j < sub.length; j++){         
           if(isAnagrama(sub[i], sub[j])){
             total++;           
           }
         }
      }
    }
    return total;
  }
  
  
  
  module.exports = TotalDeSubstringsAnagramas;
