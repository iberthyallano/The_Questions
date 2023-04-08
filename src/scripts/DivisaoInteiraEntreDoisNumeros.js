function divisaoInteiraEntreDoisNumeros(dividendo, divisor) {
   let quociente = 0;

   while (dividendo >= divisor) {
      dividendo -= divisor;
      quociente++;
   }

   return [quociente, dividendo];
}

module.exports = divisaoInteiraEntreDoisNumeros;
