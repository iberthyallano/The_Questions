const intersecao = require('../src/scripts/Intesercao');

test("Teste Exemplo", () => {
    let entrada = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
    expect(intersecao(entrada)).toStrictEqual("1,4,13");
});

test("Teste Aleatorio 1", () => {
    let entrada = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
    expect(intersecao(entrada)).toStrictEqual("1,9,10");
});

test("Teste Aleatorio 2", () => {
    let entrada = ["5, 8, 3, 10, 7, 18", "3, 5, 9, 18"];
    expect(intersecao(entrada)).toStrictEqual("5,3,18");
});