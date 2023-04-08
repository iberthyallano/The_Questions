function codigoDeCesar(posicoes, frase) {
   let criptografia = "";

   for (var index in frase) {
      let charCode = frase.charCodeAt(index);
      criptografia += String.fromCharCode(
         charCode != " ".charCodeAt(0) ? charCode + posicoes : charCode
      );
   }

   return criptografia;
}

module.exports = codigoDeCesar;
