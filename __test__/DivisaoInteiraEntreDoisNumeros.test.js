
test("Teste Exemplo", () => {
    expect(divisaoInteiraEntreDoisNumeros(20, 4)).toBe([5,0]);
});

test("Teste Aleatorio 1", () => {
    expect(divisaoInteiraEntreDoisNumeros(25, 10)).toBe([2,5]);
});

test("Teste Aleatorio 2", () => {
    expect(divisaoInteiraEntreDoisNumeros(257, 48)).toBe([5, 17]);
});