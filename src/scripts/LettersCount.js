
function exibir(contagem, caracter){
    let result = ``;
    
    for(let k = 0; k < contagem.length; k++){
        result += `${contagem[k][0]}(${contagem[k][1]})` + (k+1 == contagem.length ? `\n` : `; `);   
    }

    if(caracter.length > 1 || !isNaN(caracter)){
        result += `consulta inválida\n`;
    }else{
        let totalCaracter = null;
        contagem.map(array => {if(array.indexOf(caracter) != -1 && totalCaracter === null)totalCaracter = array[1];});
        result += `${(totalCaracter === null ? 0 : totalCaracter)}\n`;
    }

    return result;
}

function contLetras(palavra){
    palavra = palavra.split('');
    let letras = [...new Set(palavra)];
    
    let letraTotal = letras.map(letra => {
        let cont = 0;
        palavra.map(caracter => {if(caracter === letra)cont++})
        return [letra, cont];
    });

    return letraTotal;
}

function lettersCount(texto){
    let entrada = texto.toUpperCase().split('\n');
    let result = ``;
    
    for(let i = 1; i <= parseInt(entrada[0]); i++){
        let palavraCaracter = entrada[i].split(' ');
        let contagem = contLetras(palavraCaracter[0]);
        result += `${exibir(contagem, palavraCaracter[1])}\n`;
    }
    
    return result;
}

module.exports = lettersCount;