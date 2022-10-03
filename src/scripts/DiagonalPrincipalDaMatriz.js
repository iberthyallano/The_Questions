
function criaMatrix(dimencao){
    if(dimencao === 0){return "\n"}

    let matrix = new Array(dimencao).fill([]).map(lin => new Array(dimencao).fill(0)); 
    
    for(let i in matrix){matrix[i][i] = 1;}

    return matrix.map(array => array.join(" ")).join("\n") + `\n\n`;
}

function diagonalPrincipalDaMatriz(texto){
    let entrada = texto.split('\n');
    let result = ``;
    
    for(let h = 1; h <= parseInt(entrada[0]); h++){
        result += `Matriz(${entrada[h]}x${entrada[h]})\n` + criaMatrix(parseInt(entrada[h]));
    }

    return result;
}

module.exports = diagonalPrincipalDaMatriz;