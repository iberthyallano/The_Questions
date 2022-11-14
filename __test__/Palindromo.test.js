const palindromo = require('../src/scripts/Palindromo');

test("exemplo radix", () => {
    let matrix = `4\nBANANAS\nPATA\nANEL\nA1A`;
    expect(palindromo(matrix)).toBe(`ANANA\nATA\nsem resultados\nentrada inválida\n`);
});

test("teste aleatorio 1", () => {
    let matrix = `3\nbIciCleta\np90p\njUjuBA`;
    expect(palindromo(matrix)).toBe(`ICI\nentrada inválida\nJUJ\n`);
});

test("teste aleatorio 2", () => {
    let matrix = `1\noVo`;
    expect(palindromo(matrix)).toBe(`OVO\n`);
});
