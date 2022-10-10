
function intersecao(ConjuntosStringFormat){
    let cjA = ConjuntosStringFormat[0].split(", ");
    let cjB = ConjuntosStringFormat[1].split(", ");
  
    let intersecao = cjA.filter(n => cjB.includes(n));
  
    return intersecao.join(",");
}

module.exports = intersecao;