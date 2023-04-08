const divisaoInteiraEntreDoisNumeros = require("../src/scripts/DivisaoInteiraEntreDoisNumeros");

test("Teste Exemplo", () => {
   expect(divisaoInteiraEntreDoisNumeros(20, 4)).toEqual([5, 0]);
});

test("Teste Aleatorio 1", () => {
   expect(divisaoInteiraEntreDoisNumeros(25, 10)).toEqual([2, 5]);
});

test("Teste Aleatorio 2", () => {
   expect(divisaoInteiraEntreDoisNumeros(257, 48)).toEqual([5, 17]);
});
