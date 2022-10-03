

test("Teste Exemplo", () => {
    let matriz = `3\n0\n4\n2`;
    expect(fibonacciArray(matriz)).toBe(`Fib(0) = 0\nFib(4) = 3\nFib(2) = 1\n`);
});

test("Teste Aleatorio 1", () => {
    let matriz = `5\n1\n0\n2\n5\n10`;
    expect(fibonacciArray(matriz)).toBe(`Fib(1) = 1\nFib(0) = 0\nFib(2) = 1\nFib(5) = 5\nFib(10) = 55\n`);
});

test("Teste Aleatorio 2", () => {
    let matriz = `2\n8\n9`;
    expect(fibonacciArray(matriz)).toBe(`Fib(8) = 21\nFib(9) = 34\n`);
});
