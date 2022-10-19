const lettersCount = require('../src/scripts/LettersCount');

test("Teste Exemplo", () => {
    let entrada = `4\nARARA A\nTORTA F\nURUGUAIANA UR\nPARALELEPIPEDO 1`;
    expect(lettersCount(entrada)).toBe(`A(3); R(2)\n3\n\nT(2); O(1); R(1); A(1)\n0\n\nU(3); R(1); G(1); A(3); I(1); N(1)\nconsulta inválida\n\nP(3); A(2); R(1); L(2); E(3); I(1); D(1); O(1)\nconsulta inválida\n\n`);
});

test("Teste Aleatorio 1", () => {
    let entrada = `3\nAboboRa O\nAveStrUz Z\nbanana 2`;
    expect(lettersCount(entrada)).toBe(`A(2); B(2); O(2); R(1)\n2\n\nA(1); V(1); E(1); S(1); T(1); R(1); U(1); Z(1)\n1\n\nB(1); A(3); N(2)\nconsulta inválida\n\n`);
});

test("Teste Aleatorio 2", () => {
    let entrada = `4\nbicicleta C\npapa 9\npRoParoxItoNa pr\nbbbaaaddjda 25`;
    expect(lettersCount(entrada)).toBe(`B(1); I(2); C(2); L(1); E(1); T(1); A(1)\n2\n\nP(2); A(2)\nconsulta inválida\n\nP(2); R(2); O(3); A(2); X(1); I(1); T(1); N(1)\nconsulta inválida\n\nB(3); A(4); D(3); J(1)\nconsulta inválida\n\n`);
});