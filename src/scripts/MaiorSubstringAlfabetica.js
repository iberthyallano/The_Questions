function maiorSubstringAlfabetica(text) {
   let subs = [];

   for (let i = 0; i < text.length; i++) {
      subs.push(text.substring(i, text.length));
   }

   subs.sort();

   return subs.pop();
}

module.exports = maiorSubstringAlfabetica;
