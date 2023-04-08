const validandoSenha = require("../src/scripts/ValidandoSenha");

test("Teste Exemplo", () => {
   expect(validandoSenha("Ya3")).toStrictEqual(3);
});

test("Teste caracters especiais", () => {
   expect(validandoSenha("!Y425U")).toStrictEqual(1);
   expect(validandoSenha("@Y425U")).toStrictEqual(1);
   expect(validandoSenha("#Y425U")).toStrictEqual(1);
   expect(validandoSenha("$Y425U")).toStrictEqual(1);
   expect(validandoSenha("%Y425U")).toStrictEqual(1);
   expect(validandoSenha("^Y425U")).toStrictEqual(1);
   expect(validandoSenha("&Y425U")).toStrictEqual(1);
   expect(validandoSenha("(Y425U")).toStrictEqual(1);
   expect(validandoSenha(")Y425U")).toStrictEqual(1);
   expect(validandoSenha("+Y425U")).toStrictEqual(1);
});

test("Teste Aleatorio 1", () => {
   expect(validandoSenha("@T72ZU")).toStrictEqual(1);
});

test("Teste Aleatorio 2", () => {
   expect(validandoSenha("ds!sfd")).toStrictEqual(2);
});
