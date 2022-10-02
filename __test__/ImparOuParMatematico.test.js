
test("Teste Exemplo", () => {
    expect(diagonalPrincipalDaMatriz(3)).toBe(`Impar`);
    expect(diagonalPrincipalDaMatriz(4)).toBe(`Par`);
});

test("Teste Aleatorio 1", () => {
    expect(diagonalPrincipalDaMatriz(25)).toBe(`Impar`);
});

test("Teste Aleatorio 2", () => {
    expect(diagonalPrincipalDaMatriz(98)).toBe(`Par`);
});