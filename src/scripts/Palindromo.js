function verificaPalindromo(palavra = ``) {
   if (palavra.length > 2) {
      if (palavra != palavra.split(``).reverse().join(``)) {
         return false;
      }
      return true;
   }

   return false;
}

function buscaPalindromo(palavra = ``) {
   let maiorPalindromo = ``;

   for (let k = 0; k < palavra.length - 1; k++) {
      for (let l = k + 1; l <= palavra.length; l++) {
         let subString = palavra.substring(k, l);
         if (verificaPalindromo(subString)) {
            if (maiorPalindromo.length < subString.length) {
               maiorPalindromo = subString;
            }
         }
      }
   }

   return maiorPalindromo === `` ? `sem resultados` : maiorPalindromo;
}

function validaPalavra(palavra) {
   for (let j in palavra) {
      if (!isNaN(palavra[j])) {
         return false;
      }
   }

   return true;
}

function palindromo(texto) {
   let entrada = texto.toUpperCase().split("\n");
   let result = ``;

   for (let i = 1; i <= parseInt(entrada[0]); i++) {
      result += validaPalavra(entrada[i])
         ? `${buscaPalindromo(entrada[i])}\n`
         : `entrada inválida\n`;
   }

   return result;
}

module.exports = palindromo;
