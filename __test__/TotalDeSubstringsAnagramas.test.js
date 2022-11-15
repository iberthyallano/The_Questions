const TotalDeSubstringsAnagramas = require('../src/scripts/TotalDeSubstringsAnagramas');

test("Teste Exemplo", () => {
    expect(TotalDeSubstringsAnagramas('ovo')).toStrictEqual(2);
});

test("Teste Aleatorio 1", () => {
    expect(TotalDeSubstringsAnagramas('ifailuhkqq')).toStrictEqual(3);
});

test("Teste Aleatorio 2", () => {
    expect(TotalDeSubstringsAnagramas('arara')).toStrictEqual(12);
});