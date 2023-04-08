const numerosPrimosImpares = require("../src/scripts/NumerosPrimosImpares");

test("Teste Exemplo", () => {
   expect(numerosPrimosImpares(10)).toEqual([
      3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
   ]);
});

test("Teste Aleatorio 1", () => {
   expect(numerosPrimosImpares(4)).toEqual([3, 5, 7, 11]);
});

test("Teste Aleatorio 2", () => {
   expect(numerosPrimosImpares(2)).toEqual([3, 5]);
});
