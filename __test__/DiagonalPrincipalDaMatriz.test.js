
test("Teste Exemplo", () => {
    let matrix = `3\n0\n4\n2`;
    expect(diagonalPrincipalDaMatriz(matrix)).toBe(`Matrix(0x0)\n\nMatrix(4x4)\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1\n\nMatrix(2x2)\n1 0\n0 1\n\n`);
});

test("Teste Aleatorio 1", () => {
    let matrix = `3\n1\n5\n3`;
    expect(diagonalPrincipalDaMatriz(matrix)).toBe(`Matrix(1x1)\n1\n\nMatrix(5x5)\n1 0 0 0 0\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1\n\nMatrix(3x3)\n1 0 0\n0 1 0\n0 0 1\n\n`);
});

test("Teste Aleatorio 2", () => {
    let matrix = `2\n8\n9`;
    expect(diagonalPrincipalDaMatriz(matrix)).toBe(`Matrix(8x8)\n1 0 0 0 0 0 0 0\n0 1 0 0 0 0 0 0\n0 0 1 0 0 0 0 0\n0 0 0 1 0 0 0 0\n0 0 0 0 1 0 0 0\n0 0 0 0 0 1 0 0\n0 0 0 0 0 0 1 0\n0 0 0 0 0 0 0 1\n\nMatrix(9x9)\n1 0 0 0 0 0 0 0 0\n0 1 0 0 0 0 0 0 0\n0 0 1 0 0 0 0 0 0\n0 0 0 1 0 0 0 0 0\n0 0 0 0 1 0 0 0 0\n0 0 0 0 0 1 0 0 0\n0 0 0 0 0 0 1 0 0\n0 0 0 0 0 0 0 1 0\n0 0 0 0 0 0 0 0 1\n\n`);
});
