const ExpandedForm = require('../src/scripts/ExpandedForm');

test("Teste Exemplo", () => {
    expect(ExpandedForm(70304)).toBe('70000 + 300 + 4');
});

test("Teste Aleatorio 1", () => {
    expect(ExpandedForm(325)).toBe('300 + 20 + 5');
});

test("Teste Aleatorio 2", () => {
    expect(ExpandedForm(86)).toBe('80 + 6');
});