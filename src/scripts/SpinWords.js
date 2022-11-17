
String.prototype.reverse = function(){
  return this.split("").reverse().join("");
}

function spinWords(texto){
 return texto.split(" ").map(palavra => { return palavra.length >= 5 ? 
  palavra.reverse() : palavra;} ).join(" ");
}


module.exports = spinWords;