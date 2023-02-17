const spinWords = require('../src/scripts/SpinWords');

test("Teste Exemplo", () => {
    expect(spinWords("Isso é um teste")).toBe("Isso é um etset");
});

test("Teste Aleatorio 1", () => {
    expect(spinWords("Irei testar mais uma vez")).toBe("Irei ratset mais uma vez");
});

test("Teste Aleatorio 2", () => {
    expect(spinWords("Talvez tenham que testar mais uma vez")).toBe("zevlaT mahnet que ratset mais uma vez");
});