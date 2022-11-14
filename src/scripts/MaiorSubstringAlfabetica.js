function maiorSubstringAlfabetica(texto){
    let subs = [];

    for(let i = 0; i < texto.length; i++){
      subs.push(texto.substring(i, texto.length));
    }
    
    subs.sort();
    
    return subs.pop();
}

module.exports = maiorSubstringAlfabetica;