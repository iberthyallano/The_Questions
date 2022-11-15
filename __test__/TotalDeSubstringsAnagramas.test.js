const totalDeSubstringsAnagramas = require('../src/scripts/TotalDeSubstringsAnagramas');

test("Teste Exemplo", () => {
    expect(totalDeSubstringsAnagramas('ovo')).toStrictEqual(2);
});

test("Teste Aleatorio 1", () => {
    expect(totalDeSubstringsAnagramas('ifailuhkqq')).toStrictEqual(3);
});

test("Teste Aleatorio 2", () => {
    expect(totalDeSubstringsAnagramas('arara')).toStrictEqual(12);
});