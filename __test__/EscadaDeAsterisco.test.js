const escadaDeAsterisco = require("../src/scripts/EscadaDeAsterisco");

test("Teste Exemplo", () => {
   expect(escadaDeAsterisco(6)).toEqual(
      "     *\n    **\n   ***\n  ****\n *****\n******\n"
   );
});

test("Teste Aleatorio 1", () => {
   expect(escadaDeAsterisco(10)).toEqual(
      "         *\n        **\n       ***\n      ****\n     *****\n    ******\n   *******\n  ********\n *********\n**********\n"
   );
});

test("Teste Aleatorio 2", () => {
   expect(escadaDeAsterisco(3)).toEqual("  *\n **\n***\n");
});
