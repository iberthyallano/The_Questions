const maiorSubstringAlfabetica = require('../src/scripts/MaiorSubstringAlfabetica')

test('Teste Exemplo', () => {    
    expect(
        maiorSubstringAlfabetica("banana")
        ).toEqual("nana");
});

test('Teste Aleatorio 1', () => {
    expect(
        maiorSubstringAlfabetica("abacate")
        ).toEqual("te");
});

test('Teste Aleatorio 2', () => {
    expect(
        maiorSubstringAlfabetica("morango")
        ).toEqual("rango");
});