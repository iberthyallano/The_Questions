const palavraMaisLonga = require('../src/scripts/palavraMaisLonga');

test("Teste Exemplo", () => {
    let entrada = "Hello world123 567";
    expect(palavraMaisLonga(entrada)).toStrictEqual("Hello");
});

test("Teste Aleatorio 1", () => {
    let entrada = "Justino é o nome de vovô";
    expect(palavraMaisLonga(entrada)).toStrictEqual("Justino");
});

test("Teste Aleatorio 2", () => {
    let entrada = "The Big Bang Theory é melhor que Friends";
    expect(palavraMaisLonga(entrada)).toStrictEqual("Friends");
});