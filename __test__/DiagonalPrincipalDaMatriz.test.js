
test("Teste Exemplo", () => {
    let matriz = `3\n0\n4\n2`;
    expect(diagonalPrincipalDaMatriz(matriz)).toBe(`Matriz(0x0)\n\nMatriz(4x4)\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1\n\nMatriz(2x2)\n1 0\n0 1\n\n`);
});

test("Teste Aleatorio 1", () => {
    let matriz = `3\n1\n5\n3`;
    expect(diagonalPrincipalDaMatriz(matriz)).toBe(`Matriz(1x1)\n1\n\nMatriz(5x5)\n1 0 0 0 0\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1\n\nMatriz(3x3)\n1 0 0\n0 1 0\n0 0 1\n\n`);
});

test("Teste Aleatorio 2", () => {
    let matriz = `2\n8\n9`;
    expect(diagonalPrincipalDaMatriz(matriz)).toBe(`Matriz(8x8)\n1 0 0 0 0 0 0 0\n0 1 0 0 0 0 0 0\n0 0 1 0 0 0 0 0\n0 0 0 1 0 0 0 0\n0 0 0 0 1 0 0 0\n0 0 0 0 0 1 0 0\n0 0 0 0 0 0 1 0\n0 0 0 0 0 0 0 1\n\nMatriz(9x9)\n1 0 0 0 0 0 0 0 0\n0 1 0 0 0 0 0 0 0\n0 0 1 0 0 0 0 0 0\n0 0 0 1 0 0 0 0 0\n0 0 0 0 1 0 0 0 0\n0 0 0 0 0 1 0 0 0\n0 0 0 0 0 0 1 0 0\n0 0 0 0 0 0 0 1 0\n0 0 0 0 0 0 0 0 1\n\n`);
});
