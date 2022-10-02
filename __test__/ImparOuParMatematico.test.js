
test("Teste Exemplo", () => {
    expect(imparOuParMatematico(3)).toBe(`Impar`);
    expect(imparOuParMatematico(4)).toBe(`Par`);
});

test("Teste Aleatorio 1", () => {
    expect(imparOuParMatematico(25)).toBe(`Impar`);
});

test("Teste Aleatorio 2", () => {
    expect(imparOuParMatematico(98)).toBe(`Par`);
});