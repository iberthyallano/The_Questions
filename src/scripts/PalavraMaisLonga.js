
function getTamanhoPalavra(palavra) {
    let tamanho = 0;
    for(let i in palavra){
        if(isNaN(palavra[i])){
            tamanho++;
        }
    }
    return tamanho;
}

function palavraMaisLoga(frase){
    let palavrasDaFrase = frase.split(" ");
    let palavra = "", tamPlv = 0;
    for(let i in palavrasDaFrase) { 
        let auxTam = getTamanhoPalavra(palavrasDaFrase[i]);
        if(auxTam > tamPlv){
            palavra = palavrasDaFrase[i];
            tamPlv = auxTam;
        }
    }
    return palavra; 
}

module.exports = palavraMaisLoga;