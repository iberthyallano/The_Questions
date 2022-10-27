
function getTamanhoPalavra(palavra) {
    let tamanho = 0;

    palavra.split('').map(letra => { if(isNaN(letra)){tamanho++;} });
  
    return tamanho;
}

function palavraMaisLoga(frase){

    let palavraFinal = "", tamPlv = 0;

    frase.split(" ").map( palavra => {
        let auxTam = getTamanhoPalavra(palavra);
        if(auxTam > tamPlv){
            palavraFinal = palavra;
            tamPlv = auxTam;
        }
    });

    return palavraFinal; 
}

module.exports = palavraMaisLoga;