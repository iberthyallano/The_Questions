const spinWords = require('../src/scripts/SpinWords');

test("Teste Exemplo", () => {
    expect(spinWords("Isso é um teste")).toBe("Isso é um etset");
});

test("Teste Aleatorio 1", () => {
    expect(spinWords("This is a test")).toBe("This is a test");
});

test("Teste Aleatorio 2", () => {
    expect(spinWords("This is another test")).toBe("This is rehtona test");
});