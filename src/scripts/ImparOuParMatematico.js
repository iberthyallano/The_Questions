function imparOuParMatematico(num) {
   let x1 = num / 2;
   let x2 = num / 2;

   x1 = Math.round(x1);

   return x1 > x2 ? `Impar` : `Par`;
}

module.exports = imparOuParMatematico;
