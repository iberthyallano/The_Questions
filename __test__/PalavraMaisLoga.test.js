
test("Teste Exemplo", () => {
    let entrada = "Hello world123 567";
    expect(findPalavraMaisLonga(entrada)).toStrictEqual("Hello");
});

test("Teste Aleatorio 1", () => {
    let entrada = "Justino é o nome de vovô";
    expect(findPalavraMaisLonga(entrada)).toStrictEqual("Justino");
});

test("Teste Aleatorio 2", () => {
    let entrada = "The Big Bang Theory é melhor que Friends";
    expect(findPalavraMaisLonga(entrada)).toStrictEqual("Friends");
});